module.exports = {
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.stories\\.jsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '{atoms,molecules,layout}/**/!(index).js',
    '{hocs,helpers}/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 40,
      lines: 40,
      functions: 40,
    },
  },
}
