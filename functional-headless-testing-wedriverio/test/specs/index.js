const assert = require('chai').assert;

describe('webdriver.io page', function() {
  it('should have the right title - the fancy generator way', function () {
      browser.url('http://webdriver.io');
      var title = browser.getTitle();
      assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
  });
});