# Project Title

| Keyword | Equivalent(s)     |
| :-------- | :------- |
| `Feature` | `Fitur` |
| `Background` | `Dasar, Latar Belakang` |
| `Rule` | `Rule, Aturan` |
| `Scenario` | `Skenario` |
| `Scenario Outline` | `Skenario konsep, Garis-Besar Skenario` |
| `Examples` | `Contoh,Misal` |
| `Given` | `Dengan, Diketahui , Diasumsikan , Bila , Jika` |
| `When` | `Ketika` |
| `Then` | `MakaKemudian` |
| `And` | `Dan` |
| `But` | `TapiTetapi` |


### Tinjauan Pustaka

Berikut adalah beberapa referensi yang dapat digunakan untuk mendukung pengembangan dan pengujian otomatisasi:

1. **Cucumber**: 
    - Jalankan perintah berikut untuk menjalankan fungsi Cucumber:
      ```bash
      .\node_modules\.bin\cucumber-js
      ```
    - Dokumentasi resmi Gherkin dan bahasa yang didukung: [Cucumber Gherkin Languages](https://cucumber.io/docs/gherkin/languages)

2. **WebdriverIO**:
    - Dokumentasi reporter Allure: [Allure Reporter](https://webdriver.io/docs/allure-reporter)
    - Dokumentasi API elemen: [Element API](https://webdriver.io/docs/api/element/)
    - Dokumentasi konfigurasi WebdriverIO: [Konfigurasi WebdriverIO](https://webdriver.io/docs/configuration/#capabilities)

3. **OCR Testing**:
    - Halaman unduhan dan instalasi Tesseract OCR:
      - [Windows](https://github.com/UB-Mannheim/tesseract/wiki)
      - [Semua OS](https://tesseract-ocr.github.io/tessdoc/Installation.html)
    - Dokumentasi pengujian OCR dengan WebdriverIO: [OCR Testing](https://webdriver.io/docs/ocr-testing/getting-started)
    - Data pelatihan bahasa Indonesia untuk Tesseract: [ind.traineddata](https://github.com/tesseract-ocr/tessdata/blob/main/ind.traineddata)

4. **ChromeDriver**:
    - Dokumentasi kemampuan ChromeDriver: 
      - [Kemampuan ChromeDriver](https://developer.chrome.com/docs/chromedriver/capabilities?hl=id#h.p_ID_106)
      - [Objek ChromeOptions](https://developer.chrome.com/docs/chromedriver/capabilities?hl=id#chromeoptions_object)
    - Daftar lengkap opsi baris perintah Chromium: [Chromium Command-Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)

5. **Hooks pada WebdriverIO**:
    - **onPrepare**: Dipanggil sebelum pengujian dimulai (global, 1x di awal run).
    - **beforeSession**: Dipanggil sebelum sesi WebDriver dibuka.
    - **before**: Dipanggil sebelum setiap suite dimulai.
    - **beforeTest**: Dipanggil sebelum setiap `it()` atau skenario Cucumber.
    - **afterTest**: Dipanggil setelah setiap `it()` atau skenario selesai.
    - **after**: Dipanggil setelah semua pengujian selesai di satu instance/browser.
    - **onComplete**: Dipanggil setelah semua pengujian selesai (global, 1x di akhir run).
| `Examples` | `Contoh,Misal` |
| `Given` | `Dengan, Diketahui , Diasumsikan , Bila , Jika` |
| `When` | `Ketika` |
| `Then` | `MakaKemudian` |
| `And` | `Dan` |
| `But` | `TapiTetapi` |

cara ganerate fuction cucumber 
 .\node_modules\.bin\cucumber-js

 https://webdriver.io/docs/allure-reporter

 https://webdriver.io/docs/api/element/

 https://cucumber.io/docs/gherkin/languages


https://github.com/UB-Mannheim/tesseract/wiki halaman download windows, halaman intalasi semua os https://tesseract-ocr.github.io/tessdoc/Installation.html dan https://webdriver.io/docs/ocr-testing/getting-started


https://github.com/tesseract-ocr/tessdata/blob/main/ind.traineddata



pada wdio mengunakan dokumentasi https://webdriver.io/docs/configuration/#capabilities 

https://developer.chrome.com/docs/chromedriver/capabilities?hl=id#h.p_ID_106

https://developer.chrome.com/docs/chromedriver/capabilities?hl=id#chromeoptions_object

dokumne
https://peter.sh/experiments/chromium-command-line-switches/

Hook | Kapan Dipanggil
onPrepare | Sebelum test dimulai (global, 1x di awal run)
beforeSession | Sebelum sesi WebDriver dibuka
before | Sebelum setiap suite dimulai
beforeTest | Sebelum setiap it() / scenario Cucumber
afterTest | Setelah setiap it() / scenario
after | Setelah semua test selesai di satu instance/browser
onComplete | Setelah semua test selesai (global, 1x di akhir run)