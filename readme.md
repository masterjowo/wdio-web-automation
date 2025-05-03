
# Project Title

## Keyword Equivalents

| Keyword            | Equivalent(s)                              |
|--------------------|--------------------------------------------|
| `Feature`          | `Fitur`                                   |
| `Background`       | `Dasar, Latar Belakang`                   |
| `Rule`             | `Rule, Aturan`                            |
| `Scenario`         | `Skenario`                                |
| `Scenario Outline` | `Skenario Konsep, Garis-Besar Skenario`   |
| `Examples`         | `Contoh, Misal`                           |
| `Given`            | `Dengan, Diketahui, Diasumsikan, Bila, Jika` |
| `When`             | `Ketika`                                  |
| `Then`             | `Maka, Kemudian`                          |
| `And`              | `Dan`                                     |
| `But`              | `Tapi, Tetapi`                            |

## Generating Cucumber Functions

Run the following command to generate Cucumber functions:

```bash
.\node_modules\.bin\cucumber-js
```

## Useful References

- [Allure Reporter Documentation](https://webdriver.io/docs/allure-reporter)
- [WebdriverIO API Documentation](https://webdriver.io/docs/api/element/)
- [Cucumber Gherkin Languages](https://cucumber.io/docs/gherkin/languages)
- [Tesseract OCR Installation Guide](https://tesseract-ocr.github.io/tessdoc/Installation.html)
- [Tesseract OCR Trained Data for Indonesian](https://github.com/tesseract-ocr/tessdata/blob/main/ind.traineddata)
- [WebdriverIO OCR Testing Guide](https://webdriver.io/docs/ocr-testing/getting-started)
- [Chromium Command Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)

## WebDriverIO Configuration

- [WebDriverIO Capabilities Documentation](https://webdriver.io/docs/configuration/#capabilities)
- [ChromeDriver Capabilities](https://developer.chrome.com/docs/chromedriver/capabilities?hl=id#h.p_ID_106)
- [ChromeOptions Object](https://developer.chrome.com/docs/chromedriver/capabilities?hl=id#chromeoptions_object)

## WebDriverIO Hooks

| Hook          | Description                                      |
|---------------|--------------------------------------------------|
| `onPrepare`   | Called before tests start (global, once at the beginning). |
| `beforeSession` | Called before the WebDriver session is opened. |
| `before`      | Called before each suite starts.                 |
| `beforeTest`  | Called before each `it()` or Cucumber scenario.  |
| `afterTest`   | Called after each `it()` or Cucumber scenario.   |
| `after`       | Called after all tests finish in one instance/browser. |
| `onComplete`  | Called after all tests finish (global, once at the end). |
