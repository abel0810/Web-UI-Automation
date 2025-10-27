const { Builder, By } = require('selenium-webdriver');
require('chromedriver');
const assert = require('assert');

describe('SauceDemo UI Automation', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.saucedemo.com/');
   
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    await driver.sleep(2000);
  });

  it('should sort products from A to Z', async function () {
    const sortElement = await driver.findElement(By.className('product_sort_container'));
    await sortElement.sendKeys('Name (A to Z)');
    const value = await sortElement.getAttribute('value');
    console.log('Sort value:', value);
    assert.equal(value, 'az');
  });

  after(async function () {
    await driver.quit();
  });
});