import { ProductItem } from './productItem.js';
import { WebElement } from '../elements/web-element.js';

export class ProductItemsList {

    get productItems() {
        return new WebElement($$('.items > li'));
    };

    get productItemsWrapper() {
        return new WebElement($('.items'));
    };

    async getProductItems() {
        return (await this.productItems.wdioElement).map(productItem => new ProductItem(productItem)); //новый массив из экземпляров класса ProductItem
    };

    // async getProductItemByName(name) {
    //     const items = this.getProductItems();
    //     return items.find(async item => (await item.getName()) === name);
    // };

    async getProductItemByName(name) {
        const items = await this.getProductItems();

        for (const item of items) {
            if (await item.getName() === name) {
                return item;
            }
        }

        return 'Product item by name has not been found';
    };
}