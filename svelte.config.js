// Svelte preprocessor
// https://github.com/sveltejs/svelte-preprocess
const preprocess = require('svelte-preprocess')
const sveltePreprocess = preprocess({
  markupTagName: 'markup',
  typescript: {
    transpileOnly: false,
  },
  aliases: [
    ['ts', 'typescript'],
    ['js', 'javascript'],
  ],
})

// Use absolute paths for cleaner module imports
// https://github.com/dot-build/rollup-plugin-includepaths
const includePathOptions = {
  paths: ['src'],
  extensions: ['.js', '.json', '.svelte', '.ts'],
}

module.exports = {
  production: !process.env.ROLLUP_WATCH,
  preprocess: sveltePreprocess,
  includePaths: includePathOptions,
}
