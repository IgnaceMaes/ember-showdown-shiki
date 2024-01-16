# ember-showdown-shikiji

ember-showdown-shikiji is a drop-in addon that automatically adds [Shikiji](https://shikiji.netlify.app/) syntax highlighting to code blocks if you are using [showdown](https://github.com/showdownjs/showdown) to render your Markdown.

This addon also provides filename wrappers to the code block if a code block is marked with a `data-filename` attribute:

```markdown
````gjs {data-filename=app/templates/blog-post.gjs}
<template>
  <h1>{{@model.title}}</h1>
  <h2>by {{@model.author}}</h2>

  <div class="intro">
    {{@model.intro}}
  </div>
  <hr>
  <div class="body">
    {{@model.body}}
  </div>
</template>
``` 
```

You will also notice that the code sample has line numbers, this is built-in behaviour and they will be added to all code blocks.

This is also specifically designed to work in Node environments so that it can run effectively in Fastboot and prember 🎉 and as it is a drop-in addon it will automatically start working if added to any Empress projects, so it can be used to add syntax highlighting to your empress-blog if your template doesn't already provide syntax highlighting.

This addon is inspired by the great work of [ember-showdown-prism](https://github.com/empress/ember-showdown-prism).


## Compatibility

- Ember.js v4.8 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install ember-showdown-shikiji
```

## Usage

When running this addon in Fastboot you have to configure the environment to make the globals used by Shikiji available. To do this, create a `config/fastboot.js` with the following contents:

```js
module.exports = function () {
  return {
    buildSandboxGlobals(defaultGlobals) {
      return Object.assign({}, defaultGlobals, {
        atob: atob,
      });
    },
  };
};
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).