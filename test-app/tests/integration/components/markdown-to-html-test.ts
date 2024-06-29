import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | markdown-to-html', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders text', async function (assert) {
    await render(hbs`<MarkdownToHtml @markdown='Hello world!' />`);

    assert.dom().hasText('Hello world!');
  });
});
