import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { find, render, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

interface Context extends TestContext {
  markdown: string;
}

module('Integration | Component | markdown-to-html', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders markdown text', async function (this: Context, assert) {
    this.set('markdown', '*hello world*');
    await render(hbs`<MarkdownToHtml @markdown={{this.markdown}} />`);

    assert.strictEqual(
      find('div')!.innerHTML.trim(),
      '<p><em>hello world</em></p>',
    );
  });

  test('it renders markdown code', async function (this: Context, assert) {
    this.set('markdown', '```js\nconsole.log("hello world");\n```');
    await render(hbs`<MarkdownToHtml @markdown={{this.markdown}} />`);

    assert.strictEqual(
      find('div')!.innerHTML.trim(),
      '<pre class="shiki github-dark" style="background-color:#1c1e24;color:#e1e4e8" tabindex="0"><code class="language-js line-numbers"><span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"hello world"</span><span style="color:#E1E4E8">);</span></span></code></pre>',
    );
  });
});
