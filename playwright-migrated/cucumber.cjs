module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: [
      'playwright-migrated/steps/**/*.ts',
      'playwright-migrated/support/**/*.ts',
    ],
    timeout: 10000, // Set timeout to 10 seconds
    requireModule: ['ts-node/register'],
    format: ['progress'],
  },
};