const autoPreprocess = require('svelte-preprocess');

module.exports = {
  // https://www.npmjs.com/package/svelte-preprocess
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
    },
  }),
};
