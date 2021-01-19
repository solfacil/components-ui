module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['<rootDir>/test/setupTestFramework.js'],
  transform: {
    '^.+\\.js?$': '<rootDir>/test/transform.js',
  },
};
