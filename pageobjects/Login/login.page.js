// Login.page.js
import Page from '../page.js';
import { browser,expect } from '@wdio/globals';
import loc from './LocatorLogin.page.js';

class DataSementaras {
  constructor() {
      this._dataSementaraString = '';
  }

  setTitikUrl(dataSementaraString) {
      this._dataSementaraString = dataSementaraString;
  }

  getTitikUrl() {
      return this._dataSementaraString;
  }
}


class LoginPage extends Page {
  constructor() {
    super();
    this.data = new DataSementaras();
  }

  async login(username, password) {
    const currentUrl = await browser.getUrl();
    this.data.setTitikUrl(currentUrl);
    await loc.inputUsername.setValue(username);   // gunakan locator
    await loc.inputPassword.setValue(password);

    // contoh jeda / OCR, dsb
    // await browser.pause(9000);
    // const result = await browser.ocrGetText();
    // console.log('result = ', JSON.stringify(result, null, 2));

    await loc.btnSubmit.click();                  // klik tombol
  
  }
  // async PageTitle() {
  //   await loc.text.waitForDisplayed({ timeout: 5000 });
  //   const title = await loc.text.getText();
  //   return title;
  // }

  async ValidatePage() {
    const currentUrl = await browser.getUrl()
    if(this.data.getTitikUrl() === currentUrl){
      await loc.texterror.waitForDisplayed({ timeout: 5000 });
      const title = await loc.texterror.getText();
      return title;
    }
    else{
      await loc.textsucceed.waitForDisplayed({ timeout: 5000 });
      const title = await loc.textsucceed.getText();
      return title;
    }
  }
  async btnsubmit() {
    await loc.btnSubmit.click(); 
  }
  async open(path) {
    try {
      console.log('=== OPEN FUNCTION CALLED ===');
      return super.open(path);
    } catch (error) {
      console.error('Error during page open:', error);
      throw new Error(`Failed to open page: ${error.message}`);
    }
  }
}

export default new LoginPage();
