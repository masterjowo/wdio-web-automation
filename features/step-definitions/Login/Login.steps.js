
import { Given, When, Then, Before, After } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals';
import loginPage from '../../../pageobjects/Login/login.page.js';
// import DashboardPage from '../pageobjects/Dashboard/Dashboard.page.js';
import allureReporter from '@wdio/allure-reporter';
import fs from 'fs';


When('user menekan tombol login', async () => {
  await loginPage.btnsubmit();
  await allureReporter.addFeature(' Halaman login');
  await allureReporter.addStory('user menekan tombol login');
});


When('pengguna menekan tombol Login OCR', async () => {
  await browser.ocrClickOnText({ text: "Log in" });
  await allureReporter.addFeature(' Halaman login');
  await allureReporter.addStory('user menekan tombol login');
});


Then('pengguna diarahkan ke halaman {string} atau halaman login', async (string) => {
  const element = await loginPage.getLoginTitle();
  // await element.waitForDisplayed({ timeout: 5000 });
  // await expect(element).toHaveText(string);
  await allureReporter.addFeature(' Halaman login');
  await allureReporter.addStory(`pengguna diarahkan ke halaman ${string} atau halaman login`);

});


Given('pengguna menekan tombol Login atau Submit', async () => {
  await loginPage.btnsubmit();
});

When(/^pengguna memasukkan (.*) dan (.*)$/, async (email, password) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.login(email, password);
})
Then(/^user dapat melihat pesan (.*)$/, async (message) => {
  console.log(`ini hasil dari get text berupa sting  ${await loginPage.ValidatePage()}`);
  //await expect.soft(await loginPage.ValidatePage()).toHaveText(message);
  const text = await loginPage.ValidatePage();
  expect(text).toEqual(message);
  //await expect(await loginPage.ValidatePage()).toHaveText("Products");
  await allureReporter.addFeature(' Halaman login');
  await allureReporter.addStory(`user dapat melihat pesan ${message}`);
});

