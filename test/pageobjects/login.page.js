const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('input#__BVID__4');
  }

  get inputPassword() {
    return $('input#__BVID__6');
  }

  // return $('button[type="submit"]');

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    browser.keys('Enter')
    await browser.pause(30000)
    await this.inputPassword.setValue(password);
    browser.keys('Enter')
    
    await browser.setTimeout({ 'script': 600000 })
    await browser.pause(30000)
        // expect(await $(".h-600.mb-3").getText()).to.have.string('Welcome Back')

       


  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
