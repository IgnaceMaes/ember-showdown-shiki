import Application from '@ember/application';

import showdown from 'showdown';
import {
  bundledLanguages,
  createHighlighter,
  type LanguageInput,
  type ShikiTransformer,
} from 'shiki';
import { transformerNotationDiff } from '@shikijs/transformers';

import '../styles/shiki.css';
import GlimmerHandlebarsGrammar from '../glimmer-handlebars-grammar.ts';

const CODE_BLOCK_REGEX =
  /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\n`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g;

const EMPTY_LINE_DIFF_PLACEHOLDER = 'EMPTY_LINE_DIFF_PLACEHOLDER';

let blockCounter = 0;

/**
 * Creates a Shiki transformer that applies color replacements on the style attribute.
 * @param colorReplacements The color replacements to apply.
 * @returns The Shiki transformer.
 */
function colorReplacementOnStyle(
  colorReplacements: Record<string, string>,
): ShikiTransformer {
  return {
    pre(hast: Parameters<NonNullable<ShikiTransformer['pre']>>[0]) {
      Object.entries(colorReplacements).forEach(([from, to]) => {
        if (hast.properties['style']) {
          hast.properties['style'] = (
            hast.properties['style'] as string
          ).replace(from, to);
        }
      });
    },
  };
}

async function initializeShiki(theme: string, languages: string[]) {
  const highlighter = await createHighlighter({
    themes: [theme],
    langs: [GlimmerHandlebarsGrammar as unknown as LanguageInput, ...languages],
  });

  return highlighter;
}

function stripQuotes(value: string) {
  if (value?.startsWith('"') && value?.endsWith('"')) {
    return value.substring(1, value.length - 1);
  }
  return value;
}

function extractCodeBlockHeader(languageBlock: string) {
  const match = languageBlock.match(/(\w+) ?(\{([^}]*)\})?/);
  let language = '';
  let attributeString = '';

  if (match && match[1]) {
    language = match[1];
  }

  if (match && match[3]) {
    attributeString = match[3];
  }

  const attributes: Record<string, string> = {};

  attributeString.split(' ').forEach((attribute) => {
    const [attibuteKey, attributeValue] = attribute.split('=');
    if (attibuteKey !== undefined && attributeValue !== undefined) {
      attributes[attibuteKey] = stripQuotes(attributeValue);
    }
  });

  return {
    language,
    attributes,
  };
}

function addDiffInfo(codeblock: string, diffInfoArgs: string[]) {
  const lines = codeblock.split('\n');

  diffInfoArgs.forEach((diffInfoArg) => {
    const operator = diffInfoArg[0];
    if (operator !== undefined) {
      const lineNo = +diffInfoArg.replace(operator, '');
      /**
       * The Shiki notation diff transform leaves out empty lines. To work around this issue,
       * we replace empty lines with a placeholder and then add the diff notation.
       * See tracking issue: https://github.com/shikijs/shiki/issues/589
       */
      const text =
        lines[lineNo - 1] === ''
          ? EMPTY_LINE_DIFF_PLACEHOLDER
          : lines[lineNo - 1];
      if (operator === '+') {
        lines[lineNo - 1] = text + '// [!code ++]';
      } else {
        lines[lineNo - 1] = text + '// [!code --]';
      }
    }
  });
  return lines.join('\n');
}

function transformCodeBlock(
  wholeMatch: string,
  languageBlock: string,
  inputCodeblock: string,
  highlighter: Awaited<ReturnType<typeof createHighlighter>>,
  options: showdown.ShowdownOptions,
  globals: { ghCodeBlocks: unknown[] },
  colorReplacements: Record<string, string>,
) {
  const end = options.omitExtraWLInCodeBlocks ? '' : '\n';
  let codeblock = showdown.subParser('detab')(inputCodeblock, options, globals);
  codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
  codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

  const { language, attributes } = extractCodeBlockHeader(languageBlock);
  const shikiLanguage = highlighter.getLoadedLanguages().includes(language)
    ? language
    : 'text';

  if (shikiLanguage !== 'text') {
    // Restore dollar signs & tremas temporarily so Prism won't highlight this
    // See https://github.com/showdownjs/showdown/blob/a9f38b6f057284460d6447371f3dc5dea999c0a6/src/converter.js#L285 for more info
    codeblock = codeblock.replace(/¨D/g, '$$');
    codeblock = codeblock.replace(/¨T/g, '¨');
  }

  const diffInfoArgs = attributes['data-diff']?.split(',');
  if (diffInfoArgs) {
    codeblock = addDiffInfo(codeblock, diffInfoArgs);
  }

  codeblock = highlighter.codeToHtml(codeblock, {
    lang: shikiLanguage,
    theme: highlighter.getLoadedThemes()[0]!,
    transformers: [
      transformerNotationDiff(),
      colorReplacementOnStyle(colorReplacements),
    ],
    colorReplacements,
  });
  codeblock = codeblock.replace(
    '<code>',
    `<code class="language-${shikiLanguage} line-numbers">`,
  );
  codeblock = `${codeblock}${end}`;
  codeblock = codeblock.replaceAll(EMPTY_LINE_DIFF_PLACEHOLDER, '');

  if (diffInfoArgs) {
    codeblock = codeblock.replace(
      '<code',
      `
      <div class="view-switch-container">
        <input class="view-switcher-input view-diff" name="view-switcher-${blockCounter}" type="radio" id="tab-${blockCounter}" checked="checked"/>
        <label class="view-switcher-label" for="tab-${blockCounter}">Diff</label>
        <input class="view-switcher-input view-before" name="view-switcher-${blockCounter}" type="radio" id="tab-${
          blockCounter + 1
        }" />
        <label class="view-switcher-label" for="tab-${
          blockCounter + 1
        }">Before</label>
        <input class="view-switcher-input view-after" name="view-switcher-${blockCounter}" type="radio" id="tab-${
          blockCounter + 2
        }"/>
        <label class="view-switcher-label" for="tab-${
          blockCounter + 2
        }">After</label>
      </div>
      <code
    `,
    );
    blockCounter += 3;
  }

  if (attributes['data-filename']) {
    const fileName = attributes['data-filename'] ?? '';
    codeblock = `<div><div class="filename ${shikiLanguage}">${fileName}</div>${codeblock}</div>`;
  }
  const codeblockHashed = showdown.subParser('hashBlock')(
    codeblock,
    options,
    globals,
  );

  // Since GHCodeblocks can be false positives, we need to
  // store the primitive text and the parsed text in a global var,
  // and then return a token
  return (
    '\n\n¨G' +
    (globals.ghCodeBlocks.push({
      text: wholeMatch,
      codeblock: codeblockHashed,
    }) -
      1) +
    'G\n\n'
  );
}

export async function initialize(application: Application) {
  application.deferReadiness();

  const config = application.resolveRegistration('config:environment') as {
    'ember-showdown-shiki'?: {
      theme?: string;
      languages?: string[];
      colorReplacements?: Record<string, string>;
    };
  };

  const defaultColorReplacements = {
    '#24292e': '#1c1e24', // Use color-gray-900 for the code block background
    '#6a737d': '#7e8791', // Lighten comment color to be AA compliant
  };

  const {
    theme = 'github-dark',
    languages = Object.keys(bundledLanguages),
    colorReplacements = defaultColorReplacements,
  } = config['ember-showdown-shiki'] ?? {};
  const highlighter = await initializeShiki(theme, languages);

  showdown.subParser('githubCodeBlocks', function (text, options, globals) {
    // Early exit if option is not enabled
    if (!options.ghCodeBlocks) {
      return text;
    }

    // Preprocess
    let textTransformed = globals.converter._dispatch(
      'githubCodeBlocks.before',
      text,
      options,
      globals,
    );

    // Transform all code blocks
    textTransformed = textTransformed.replace(
      CODE_BLOCK_REGEX,
      (
        wholeMatch: string,
        _delim: string,
        languageBlock: string,
        inputCodeblock: string,
      ) =>
        transformCodeBlock(
          wholeMatch,
          languageBlock,
          inputCodeblock,
          highlighter,
          options,
          globals,
          colorReplacements,
        ),
    );

    return globals.converter._dispatch(
      'githubCodeBlocks.after',
      textTransformed,
      options,
      globals,
    );
  });

  application.advanceReadiness();
}

export default {
  initialize,
};
