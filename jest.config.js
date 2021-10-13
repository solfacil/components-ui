module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverageFrom: [
    'src/components/**/*.{js,vue}',
    '!src/**/*.stories.js',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@directives(.*)$': '<rootDir>/src/directives$1',
    '^@validators(.*)$': '<rootDir>/src/validators$1',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
