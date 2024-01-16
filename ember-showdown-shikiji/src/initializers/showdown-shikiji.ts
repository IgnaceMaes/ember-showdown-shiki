import Application from '@ember/application';

import showdown from 'showdown';
import { bundledLanguages, getHighlighter } from 'shikiji';
import { transformerNotationDiff } from 'shikiji-transformers';

const CODE_BLOCK_REGEX =
  /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\n`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g;

async function initializeShikiji() {
  const highlighter = await getHighlighter({
    themes: ['github-dark'],
    langs: Object.keys(bundledLanguages),
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
      const text = lines[lineNo - 1];
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
  highlighter: Awaited<ReturnType<typeof getHighlighter>>,
  options: showdown.ShowdownOptions,
  globals: { ghCodeBlocks: unknown[] },
) {
  const end = options.omitExtraWLInCodeBlocks ? '' : '\n';
  let codeblock = showdown.subParser('detab')(inputCodeblock, options, globals);
  codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
  codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

  const { language, attributes } = extractCodeBlockHeader(languageBlock);

  const diffInfoArgs = attributes['data-diff']?.split(',');
  if (diffInfoArgs) {
    codeblock = addDiffInfo(codeblock, diffInfoArgs);
  }

  codeblock = highlighter.codeToHtml(codeblock, {
    lang: language,
    theme: 'github-dark',
    transformers: [transformerNotationDiff()],
  });
  codeblock = codeblock.replace(
    '<code>',
    `<code class="language-${language} line-numbers">`,
  );
  codeblock = `${codeblock}${end}`;

  if (attributes['data-filename']) {
    const fileName = attributes['data-filename'] ?? '';
    codeblock = `<div><div class="filename ${language}">${fileName}</div>${codeblock}</div>`;
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
  const highlighter = await initializeShikiji();

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
