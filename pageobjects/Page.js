import { browser } from '@wdio/globals';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Opens a sub page of the page
     * @param {string} path - path of the sub page (e.g. /path/to/page.html)
     */
    data() { console.log("=== DATA FUNCTION CALLED ==="); }
    open(path) {
        console.log("=== PAGE OPEN FUNCTION CALLED ===");
        return browser.url(path)
    }
}
