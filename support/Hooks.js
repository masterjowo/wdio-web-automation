// features/support/hooks.js
import { Before, After } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/Login/Login.page.js';

Before(async function (scenario) {
    console.log(`(hooks.js) Sebelum Scenario: `);
    // Bisa isi dengan navigasi, login, setup, dsb
    await browser.setWindowSize(1280, 800);
    await loginPage.open('/');
    // await browser.url('/');
});

After(async function (scenario) {
    console.log(`(hooks.js) Setelah Scenario: `);
    // Bisa isi dengan cleanup, logout, dsb
    //browser.deleteSession()
    await browser.reloadSession();
});