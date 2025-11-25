// LocatorLogin.page.js
import { $ } from '@wdio/globals';

/**
 * Elemen‑elemen yang dipakai di halaman Login.
 * Masing‑masing diekspos sebagai getter sehingga:
 *   await loc.inputUsername.setValue('foo')
 */
class HomeLocators {
  get PageTitle() {           // <div class="text">
    return $('//*[@class="topic-html-content-header"]');
  }
  get ButtonLogin() {        // <button id="login-button">
    return $('//*[@class="ico-login"]');
  }
  get Email() {           // <div class="text">
    return $('//a[@class="account" and contains(text(), "testsaja")]');
  }


}

// Ekspor satu instance supaya tingal `import loc from ...`
export default new HomeLocators();
