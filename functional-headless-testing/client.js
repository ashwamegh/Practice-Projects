module.exports = require('webdriverjs').remote({
  desiredCapabilities: {
    browserName: 'phantomjs'
  },
  logLevel: 'verbose'
});