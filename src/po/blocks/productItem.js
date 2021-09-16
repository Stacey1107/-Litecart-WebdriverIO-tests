import { Button } from "../elements/button.js";
import { WebElement } from "../elements/web-element.js";
export class ProductItem {
    constructor(rootElement) {
        this.rootElement = rootElement;
    };

    get removeIcon() {
        return new Button(this.rootElement.$('[name=remove_cart_item]'));
    };

    async getName() {
        return new WebElement(this.rootElement).getAttribute("data-name");
    };
}