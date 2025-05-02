import Page from '../page.js';
import { browser } from "@wdio/globals";
// import { TextDashboard } from './LocatorDashboard.page.js';


/**
 * Halaman login yang berisi selector dan metode spesifik untuk halaman login.
 */
class Dashboard {

    async getTextDashboard() {
        // const text = await TextDashboard();
        return "Dashboard";

    }

}
export default new Dashboard();



