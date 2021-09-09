export class Category {
    constructor(rootElement) {
        this.rootElement = rootElement;
    };

    async getSubcategoryItem(name) {
        return await $(`[data-name="${name}"]`);
    };

    async getName() {
        return await this.rootElement.$('<a>').getText();
    };

    async click() {
        await this.rootElement.click();
    };
}