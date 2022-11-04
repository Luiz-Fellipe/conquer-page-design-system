module.exports = {
  testPathIgnorePatterns: ['/node_modules', '/dist', '/.turbo/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  moduleNameMapper: {
    '^react($|/.+)': ['<rootDir>/node_modules/react$1'],
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
  },

  testEnvironment: 'jsdom',
}
