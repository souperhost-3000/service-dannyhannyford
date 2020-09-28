const { resolve } = require('path');
const root = resolve(__dirname, '..');

module.exports = {
  roots: ['<rootDir>'],
  displayName: 'db test',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    "/node_modules/",
  ],
  testEnvironment: 'node',
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "node",
    "css",
  ],
  preset: "@shelf/jest-mongodb",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  verbose: true,
};
