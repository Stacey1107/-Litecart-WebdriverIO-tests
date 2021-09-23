const config = require('../../../wdio.conf.js').config;
import { Button } from '../elements/button.js';

export class BasePage {
    constructor(path = '') {
        this.path = path;
    };

    async open() {
        if (browser.config.baseUrl.endsWith('/') && this.path.startsWith('/')) {
            this.path = this.path.slice(1);
        };
        return browser.url(browser.config.baseUrl + this.path);
    };

    get acceptCookies() {
        return new Button($('[name="accept_cookies"]'));
    };
}