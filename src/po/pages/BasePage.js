const config = require('../../../wdio.conf.js').config;

export class BasePage {
    constructor(path = '') {
        this.path = path;
    };

    async openPage() {
        await browser.url(`${config.baseUrl}${this.path}`);
    };
}
