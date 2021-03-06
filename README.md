# Svelte Template

The objectives of this template are:

- Keep the project and tooling as simple and minimal as possible.
- Provide a good development experience.
- Provide high-performance production builds.

Some of the interesting features include:
- HMR (Hot Module Replacement) and Fast Refresh state supported out-of-the-box. [More information](https://www.snowpack.dev/concepts/hot-module-replacement).
- Support for `js,jsx,ts,tsx` modules.
- Support for [SASS](https://www.npmjs.com/package/@snowpack/plugin-sass) styling.
- Production builds are prepared using [Webpack](https://www.npmjs.com/package/@snowpack/plugin-webpack).
- Automatic code linting and formatting with [Prettier](https://prettier.io/).

Based on the original Create Snowpack App (CSA) template.

`npx create-snowpack-app svelte-ts --template @snowpack/app-template-svelte-typescript`

More information about Snowpack is [available here](https://www.snowpack.dev).

## Available Scripts
### make dev

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.
### make test

Launches the application test runner.
### make build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### make lint

Non-destructive code styling verification. Errors will be reported but no files will be changed automatically.

### make format

Detect and automatically solve any code formatting inconsistencies.

### make scan

Scan your project for vulnerabilities and automatically install any compatible updates
to vulnerable dependencies required in production. Dependencies listed on `devDependencies`
are ignored.
