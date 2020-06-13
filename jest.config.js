module.exports = {
  modulePaths: ['node_modules', 'src'],
  transform: {
    // Support both ".js" and ".ts" files
    '^.+\\.[jt]s$': 'babel-jest',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
        debug: false,
        compilerOptions: {},
      },
    ],
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
}
