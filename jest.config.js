module.exports = {
  collectCoverageFrom: [`src/**/*.{js,jsx}`],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
  setupFiles: ['jest-plugin-context/setup'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '\\.(sass|png|css)$': '<rootDir>/jest/empty.js',
    '\\.jsx?$': 'babel-jest'
  },
  testMatch: [`<rootDir>/src/**/test.(js|jsx)`],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  modulePaths: [`<rootDir>/src`],
  moduleDirectories: ['node_modules', `src`],
  resetModules: true,
  restoreMocks: true
}
