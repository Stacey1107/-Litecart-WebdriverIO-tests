import { WebElement } from './web-element.js'
export class Button extends WebElement {
    constructor(rootElement) {
        super(rootElement);
    };

    async isEnabled() {
        await this.rootElement.isEnabled();
    };

    async isClickable() {
        await this.rootElement.isClickable();
    };
};

