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
});
