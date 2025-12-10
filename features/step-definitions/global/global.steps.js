// global.steps.js

import { Given, When, Then, Before, After } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals';
import HomePage from '../../../pageobjects/Home/Home.page.js';
// import DashboardPage from '../pageobjects/Dashboard/Dashboard.page.js';
import allureReporter from '@wdio/allure-reporter';
import Homeloc from '../../../pageobjects/Home/LocatorHome.page.js';
import fs from 'fs';

Then('memastikan tidak ada permintaan jaringan yang menghasilkan status 4XX', async () => {

    await browser.setupInterceptor();
    const requests = await browser.getRequests();//https://webdriver.io/docs/wdio-intercept-service#browsergetrequests-includepending-boolean-orderby-start--end---
    let errorFound = false;
    if (Array.isArray(requests)) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

        requests.forEach(request => {//https://www.w3schools.com/jsref/jsref_foreach.asp

            // Memeriksa status code di objek response request
            const statusCode = request.response && request.response.statusCode;
            allStatusCodes.push({ url: request.url, status: statusCode });
            // Kami hanya peduli dengan status 4xx dan 5xx (server error)
            if (statusCode >= 400 && statusCode < 600) {
                console.error(`error: url: ${request.url}, status: ${statusCode}`);//https://developer.mozilla.org/en-US/docs/Web/API/console
                errorFound = true;
            }
        });
    } else {
        console.error(' browser.getRequests() error ');//https://developer.mozilla.org/en-US/docs/Web/API/console
        errorFound = true;
    }
    if (errorFound) {
        throw new Error('pengetesan :error jaringan.');//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    }
});