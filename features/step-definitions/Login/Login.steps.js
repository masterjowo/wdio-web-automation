
import { Given, When, Then, Before, After } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals';
import loginPage from '../../../pageobjects/Login/login.page.js';
// import DashboardPage from '../pageobjects/Dashboard/Dashboard.page.js';
import allureReporter from '@wdio/allure-reporter';
import loc from '../../../pageobjects/Login/LocatorLogin.page.js';


// Given('saya melakukan login ke halaman vini', async () => {
//     // await loginPage.open('/');
//     await allureReporter.addFeature(' Halaman login');
//     await allureReporter.addStory('saya melakukan login ke halaman vini');
// });

When(/^saya login melakukan (\S+) dan (\S+)$/, async (username, password) => {
    const { metrics } = await browser.cdp('Performance', 'getMetrics');
    await loginPage.login(username, password);
    const metricsMap = {};
    metrics.forEach(metric => {
        metricsMap[metric.name] = metric.value;
    });

    console.log('📈 Performance Metrics:', metricsMap);

    // Kirim metrics ini ke Allure report sebagai attachment
    await browser.call(async () => {
        const allure = await import('@wdio/allure-reporter').then(m => m.default || m);
        allure.addAttachment(
            'Performance Metrics',
            JSON.stringify(metricsMap, null, 2), // Dibuat pretty-print JSON
            'application/json'
        );
    });

    // Kalau mau, bisa juga tambahin beberapa step manual ke Allure
    await browser.call(async () => {
        const allure = await import('@wdio/allure-reporter').then(m => m.default || m);
        allure.addStep('First Meaningful Paint: ' + metricsMap.FirstMeaningfulPaint + ' ms');
        allure.addStep('DomContentLoaded: ' + metricsMap.DomContentLoaded + ' ms');
    });

    
    await allureReporter.addFeature(' Halaman login');
    await allureReporter.addStory(`saya login melakukan ${username} dan ${password}`);
});
Given(/^user sudah berada pada halaman awal, user dapat melihat "([^"]+)"$/, async (string) => {
    // const data = await loc.text.waitForDisplayed({ timeout: 5000 });
    const element = loc.text; // WebdriverIO element
    await element.waitForDisplayed({ timeout: 5000 });
    await expect(element).toHaveText(string);
    await allureReporter.addFeature(' Halaman login');
    await allureReporter.addStory(`user sudah berada pada halaman awal, user dapat melihat ${string}`);
  });

  When('user menekan tombol login', async () =>  {
    await loginPage.btnsubmit();
    await allureReporter.addFeature(' Halaman login');
    await allureReporter.addStory('user menekan tombol login');
  });

  Then(/^user dapat melihat pesan (\S+)$/, async (message) =>  {
   await  expect(await loginPage.ValidatePage()).toHaveText(message);
   await allureReporter.addFeature(' Halaman login');
    await allureReporter.addStory(`user dapat melihat pesan ${message}`);
  });