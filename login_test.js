const { Builder, By, Key, until } = require('selenium-webdriver');

(async function saucedemoTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.saucedemo.com/');

    // Login
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    await driver.sleep(2000); // Tunggu halaman selesai load

    // Sort produk dari A-Z
    let sortDropdown = await driver.findElement(By.className('product_sort_container'));
    await sortDropdown.sendKeys('Name (A to Z)');

    await driver.sleep(2000); // Tunggu sorting selesai
  } finally {
    await driver.quit();
  }
})();