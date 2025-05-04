# Boilerplate Template

Boilerplate template adalah proyek dasar atau kerangka awal yang sudah dikonfigurasi untuk menjalankan pengujian otomatis menggunakan WebdriverIO. Ini membantu developer atau QA engineer memulai lebih cepat tanpa harus mengatur semuanya dari nol.

## Tinjauan Pustaka

Berikut adalah beberapa referensi yang dapat digunakan untuk mendukung pengembangan dan pengujian otomatisasi:

### 1. Cucumber

Cucumber adalah framework untuk pengujian otomatis (automated testing) yang dirancang untuk mendukung Behavior-Driven Development (BDD). BDD adalah pendekatan pengembangan perangkat lunak yang mendorong kolaborasi antara developer, QA, dan non-teknikal (seperti product owner) melalui bahasa yang mudah dipahami. Contoh file feature dalam bahasa Indonesia: [features\FeatureFile\Login\LoginPositive.feature]().

#### Kamus Bahasa Indonesia untuk Gherkin:

| Keyword            | Equivalent(s)                          |
|--------------------|-----------------------------------------|
| `Feature`          | `Fitur`                                |
| `Background`       | `Dasar, Latar Belakang`                |
| `Rule`             | `Rule, Aturan`                         |
| `Scenario`         | `Skenario`                             |
| `Scenario Outline` | `Skenario konsep, Garis-Besar Skenario` |
| `Examples`         | `Contoh, Misal`                        |
| `Given`            | `Dengan, Diketahui, Diasumsikan, Bila, Jika` |
| `When`             | `Ketika`                               |
| `Then`             | `Maka, Kemudian`                       |
| `And`              | `Dan`                                  |
| `But`              | `Tapi, Tetapi`                         |

#### Perintah untuk Mengenerate Fungsi Cucumber:

```bash
.\node_modules\.bin\cucumber-js
```

- Dokumentasi resmi Gherkin dan bahasa yang didukung: [Cucumber Gherkin Languages](https://cucumber.io/docs/gherkin/languages)

### 2. WebdriverIO

WebdriverIO adalah framework untuk pengujian otomatis aplikasi web dan mobile yang dibangun di atas WebDriver (Selenium) dan juga mendukung Chrome DevTools Protocol (CDP). WebdriverIO sangat populer di kalangan QA dan developer karena sintaksisnya yang sederhana, dukungan plugin yang luas, dan kompatibilitasnya dengan berbagai sistem otomasi seperti Cucumber, Mocha, Jasmine, dan Appium.

- Dokumentasi API elemen: [Element API](https://webdriver.io/docs/api/element/)
- Dokumentasi konfigurasi WebdriverIO: [Konfigurasi WebdriverIO](https://webdriver.io/docs/configuration/#capabilities)

### 3. OCR Testing

OCR Testing digunakan saat teks yang ingin diuji tidak bisa diakses langsung lewat DOM (misalnya: teks dalam gambar, captcha, canvas, atau elemen Shadow DOM yang sulit dijangkau).

#### Contoh Kapan Dibutuhkan:

- Verifikasi teks pada gambar tombol, bukan elemen HTML biasa.
- Mengecek apakah teks benar-benar ter-render secara visual di layar.
- Menguji hasil screenshot yang berisi teks (misalnya: error message di canvas game atau PDF viewer).

#### Contoh Konfigurasi pada `wdio.conf.js`:

```javascript
services: [
  // your other services
  [
    "ocr",
    {
      contrast: 0.75,
      imagesFolder: "ImgOcr",
      language: "ind", // Pastikan C:\Program Files\Tesseract-OCR\tessdata ada bahasa indo
    },
  ],
],
```

- Halaman unduhan dan instalasi Tesseract OCR:
  - [Windows](https://github.com/UB-Mannheim/tesseract/wiki)
  - [Semua OS](https://tesseract-ocr.github.io/tessdoc/Installation.html)
- Dokumentasi pengujian OCR dengan WebdriverIO: [OCR Testing](https://webdriver.io/docs/ocr-testing/getting-started)
- Data pelatihan bahasa Indonesia untuk Tesseract: [ind.traineddata](https://github.com/tesseract-ocr/tessdata/blob/main/ind.traineddata)

### 4. ChromeDriver

ChromeDriver adalah tool atau komponen perangkat lunak yang digunakan untuk mengendalikan browser Google Chrome secara otomatis melalui WebDriver API. ChromeDriver berfungsi sebagai jembatan antara skrip otomasi (seperti yang ditulis dalam Selenium) dengan browser Chrome.
#### Contoh Konfigurasi pada `wdio.conf.js`:

```javascript
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [//https://peter.sh/experiments/chromium-command-line-switches/
            '--headless',//untuk mode headless
            '--disable-gpu',// applicable to windows os only
            //'--window-size=1280,800',
            '--no-sandbox',
          ]
        }
    }],
```
- Dokumentasi kemampuan ChromeDriver:
  - [Kemampuan ChromeDriver](https://developer.chrome.com/docs/chromedriver/capabilities?hl=id#h.p_ID_106)
  - [Objek ChromeOptions](https://developer.chrome.com/docs/chromedriver/capabilities?hl=id#chromeoptions_object)
- Daftar lengkap opsi baris perintah Chromium: [Chromium Command-Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)

### 5. Hooks pada WebdriverIO

Hooks adalah fungsi yang dipanggil pada berbagai tahap siklus hidup pengujian. Berikut adalah beberapa hooks yang tersedia di WebdriverIO:

- **onPrepare**: Dipanggil sebelum pengujian dimulai (global, 1x di awal run).
- **beforeSession**: Dipanggil sebelum sesi WebDriver dibuka.
- **before**: Dipanggil sebelum setiap suite dimulai.
- **beforeTest**: Dipanggil sebelum setiap `it()` atau skenario Cucumber.
- **afterTest**: Dipanggil setelah setiap `it()` atau skenario selesai.
- **after**: Dipanggil setelah semua pengujian selesai di satu instance/browser.
- **onComplete**: Dipanggil setelah semua pengujian selesai (global, 1x di akhir run).

### 6. Allure Report
Allure Report adalah alat pelaporan (reporting tool) yang digunakan untuk menampilkan hasil pengujian otomatis dalam bentuk visual yang interaktif dan mudah dibaca. Allure sangat populer di kalangan QA dan developer karena menyajikan laporan yang tidak hanya informatif, tetapi juga rapi dan profesional.

- Dokumentasi reporter Allure: [Allure Reporter](https://webdriver.io/docs/allure-reporter)

![Logo](https://github.com/masterjowo/wdio-web-automation/blob/updatev1/doc/allure.png)
