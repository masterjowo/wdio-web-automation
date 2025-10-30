// features/support/hooks.js
process.setMaxListeners(0); 
// Ini memastikan batas listener diatur segera setelah Node.js memuat modul ini.
import { Before, After } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/Login/login.page.js';

Before(async function (scenario) {
    console.log(`(hooks.js) Sebelum Scenario: `);
    // Bisa isi dengan navigasi, login, setup, dsb
    // await browser.setWindowSize(1280, 800);
    await browser.reloadSession();
    await loginPage.open('/');
    // await browser.url('/');

});

After(async function (scenario) {
    console.log(`(hooks.js) Setelah Scenario: `);
    // Bisa isi dengan cleanup, logout, dsb
    //browser.deleteSession()
    //await browser.reloadSession();
    // Kalau butuh clear browser, cukup lakukan:
    await browser.deleteCookies();

});