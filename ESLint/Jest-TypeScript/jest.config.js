module.exports = {
  maxWorkers: 4,
  maxConcurrency: 3,
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Timeout is in milliseconds
  testTimeout: 5000,
  reporters: ['default'],
  errorOnDeprecated: true,
};
