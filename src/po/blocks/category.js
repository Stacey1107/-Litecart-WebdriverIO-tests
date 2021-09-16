import { WebElement } from "../elements/web-element";
export class Category {
    constructor(rootElement) {
        this.rootElement = rootElement; //wdio element
    };

    getSubcategoryItem(name) {
        return $(`[data-name="${name}"]`);
    };

    async getName() {
        return new WebElement(this.rootElement.$('a')).getText();
    };
}