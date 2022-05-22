module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: './src',
    testRegex: '.spec.ts$',
    transform: {
      '^.+\\.(t)s$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.ts', '!main.ts'],
    testEnvironment: 'node',
  };
  