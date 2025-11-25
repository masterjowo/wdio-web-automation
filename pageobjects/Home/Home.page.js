// Login.page.js
import Page from '../Page.js';
import { browser,expect } from '@wdio/globals';
import Homeloc from './LocatorHome.page.js';

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


class HomePage extends Page {
  constructor() {
    super();
    this.data = new DataSementaras();
  }


  async PageTitle() {
    await Homeloc.PageTitle.waitForDisplayed({ timeout: 5000 });
    // Return the element itself (do not call the getter as a function)
    return Homeloc.PageTitle;
  
  }

  async TextEmail() {
    await Homeloc.Email.waitForDisplayed({ timeout: 10000 });
    // Return the element itself (do not call the getter as a function)
    return Homeloc.Email;
  
  }
  async ButtonLogin() {
    await Homeloc.ButtonLogin.waitForDisplayed({ timeout: 5000 });
    await Homeloc.ButtonLogin.click(); 
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

export default new HomePage();
