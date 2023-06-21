function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("App Privy - Web - Automation", () => {
  it("Login", async () => {
    await browser.deleteCookies();

    await browser.url("https://app.privy.id/");

    await $('input[name="user[privyId]"]').setValue("UAT007");
    browser.keys("Enter");
    await $('input[name="user[secret]"]').setValue("Akuntes1");
    browser.keys("Enter");
    await browser.pause(30000);


    await $("//li[@class='nav-item b-nav-dropdown dropdown navbar-user-profile']//a[@class='nav-link dropdown-toggle dropdown-toggle-no-caret']").click()
        await $('li#v-step-3 a.dropdown-profile-link.mr-3 > span.text-300').click()
        await $('div#__layout div:nth-child(2) > div.submenu__body > div:nth-child(2) > div').click()
        await browser.setTimeout({ 'pageLoad': 60000 })

await browser.pause(30000);



        await $('#v-security-0__BV_toggle_').click()
        await $('div:nth-of-type(3) li:nth-of-type(3) > a').click()
    })

  });

  