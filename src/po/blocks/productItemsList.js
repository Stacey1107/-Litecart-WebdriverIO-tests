import { ProductItem } from './productItem.js'

export class ProductItemsList {

    get productItems() {
        return $$('.items > li');
    };

    get productItemsWrapper() {
        return $('.items');
    }

    async getProductItems() {
        return (await this.productItems).map(productItem => new ProductItem(productItem)); //новый массив из экземпляров класса ProductItem

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

        return null;
    };
}