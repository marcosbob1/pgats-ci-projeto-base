/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'reports/coverage',
  coverageProvider: 'babel',
  coverageReporters: ['text', 'lcov'],
  setupFiles: ['<rootDir>/test/setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/e2e/', '/playwright-tests/'],
  transform: {},
};
