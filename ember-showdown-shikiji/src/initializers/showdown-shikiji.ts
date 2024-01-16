import { bundledLanguages, getHighlighter } from 'shikiji';
import Application from '@ember/application';

async function initializeShikiji() {
  const highlighter = await getHighlighter({
    themes: ['github-dark'],
    langs: Object.keys(bundledLanguages),
  });

  return highlighter;
}

export async function initialize(application: Application) {
  application.deferReadiness();
  const highlighter = await initializeShikiji();

  application.advanceReadiness();
}

export default {
  initialize,
};
