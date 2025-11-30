
import { Given, When, Then, Before, After } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals';
import HomePage from '../../../pageobjects/Home/Home.page.js';
// import DashboardPage from '../pageobjects/Dashboard/Dashboard.page.js';
import allureReporter from '@wdio/allure-reporter';
import Homeloc from '../../../pageobjects/Home/LocatorHome.page.js';
import fs from 'fs';

Given('pengguna berada pada halaman utama dan dapat melihat teks {string}', async (string) => {
  await expect(browser).toMatchScreenSnapshot(`homepage-page`,
     //{ threshold: 0.1 }
    );
  const element = await HomePage.PageTitle();
  await element.waitForDisplayed({ timeout: 5000 });
  await expect(element).toHaveText(string);
  await allureReporter.addFeature(' Halaman Home');
  await allureReporter.addStory(`pengguna berada pada halaman utama dan dapat melihat teks  ${string}`);
});

Given('pengguna menekan tombol Login', async () => {
  await HomePage.ButtonLogin();
});

Then(/^pengguna dapat melihat email telah login (.*)$/, async (string) => {
  const element = await HomePage.TextEmail();
  await element.waitForDisplayed({ timeout: 5000 });
  await expect(element).toHaveText(string);
  await allureReporter.addFeature(' Halaman Home');
  await allureReporter.addStory(`pengguna dapat melihat email telah login ${string}`);
});



Then('user dapat melihat website error', async () => {
  const globalErrorMock = await browser.mock('**', {
    method: '*'
  });
  // 2. Set Respons Paksa (Status 400)
  globalErrorMock.respond(
    { error: 'Forced network error' },
    {
      statusCode: 400, // PAKSA STATUS CODE MENJADI 400
      headers: { 'Content-Type': 'application/json' }
    }
  );
  await browser.pause(5000);
})
