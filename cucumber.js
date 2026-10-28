module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    paths: ['features/**/*.feature'],
    tags: 'not @wip',
    format: ['progress', 'html:reports/cucumber.html'],
  },
};