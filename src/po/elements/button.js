export class Button {
    constructor(rootElement) {
        this.rootElement = rootElement;
    };

    async click() {
        await this.rootElement.click();
    };

    async isEnabled() {
        await this.rootElement.isEnabled();
    };

    async isClickable() {
        await this.rootElement.isClickable();
    };
}

