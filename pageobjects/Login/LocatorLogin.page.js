// LocatorLogin.page.js
import { $ } from '@wdio/globals';

/**
 * Elemen‑elemen yang dipakai di halaman Login.
 * Masing‑masing diekspos sebagai getter sehingga:
 *   await loc.inputUsername.setValue('foo')
 */
class LoginLocators {
  get inputEmail() {       // <input id="user_id">
    return $('//*[@name="Email"]');
  }

  get inputPassword() {       // <input id="user_secret">
    return $('//*[@name="Password"]');
  }

  get btnSubmit() {           // <button type="submit">
    return $('//*[@class="button-1 login-button"]');
  }
  get text() {           // <div class="text">
    return $('//div[contains(text(), "Swag Labs")]');
  }
  get texterror() {           // <div class="text">
    return $('//h3[@data-test="error"]');
  }
  get textsucceed() {           // <div class="text">
    return $('//*[@class="title"]');
  }
  get LoginTitle() {           // <div class="text">
    return $('//h1');
  }

}

// Ekspor satu instance supaya tingal `import loc from ...`
export default new LoginLocators();
