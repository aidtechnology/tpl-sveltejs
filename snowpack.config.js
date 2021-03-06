/** @type {import("snowpack").SnowpackUserConfig } */

// https://www.snowpack.dev/reference/configuration
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    ['@snowpack/plugin-webpack', {/* options */}],
    ['@snowpack/plugin-sass', {/* options */}]
  ],
  alias: {
    "~": "./src"
  },
  optimize: {
    /*
    // https://www.snowpack.dev/guides/optimize-and-bundle
    bundle: true,
    minify: true,
    manifest: true,
    target: 'es2018'
    */
  }
};
