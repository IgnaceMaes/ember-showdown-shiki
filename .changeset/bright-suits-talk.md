---
"ember-showdown-shiki": patch
---

style: change default theme to 'github-dark'. This is a breaking change in theory, but as no consumers are in production yet this is included as patch. To keep the previoud behaviour, set the 'theme' option in environment.js to 'dark-plus'.
