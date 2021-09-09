import { Button } from "../elements/button.js";

export class ProductItem {
    constructor(rootElement) {
        this.rootElement = rootElement;
    };

    get removeIcon() {
        return new Button(this.rootElement.$('[name=remove_cart_item]'));
    };

    async deleteProductItem() {
        await this.removeIcon.click();
    };

    async getName() {
        return await this.rootElement.getAttribute("data-name");
    };

    async getQuantity() {
        return await this.rootElement.getAttribute("data-quantity");
    };
}