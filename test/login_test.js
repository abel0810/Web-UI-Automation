const LoginPage = require('../pages/LoginPage');

describe('Login Test', () => {
  it('should login successfully', async () => {
    await browser.url('https://www.saucedemo.com/');
    await LoginPage.login('standard_user', 'secret_sauce');
  
  const percySnapshot = require('@percy/webdriverio');

describe('Visual Snapshot Test', () => {
  it('should take local screenshot and Percy snapshot', async () => {
    await browser.url('https://www.saucedemo.com/');

    // 🔸 Save screenshot secara lokal
    await browser.saveScreenshot('./screenshots/login-page.png');

    // 🔸 Kirim snapshot ke Percy
    await percySnapshot(browser, 'Login Page');
  });
});
  
  });
});
