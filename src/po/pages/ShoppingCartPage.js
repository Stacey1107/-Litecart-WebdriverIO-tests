import { ProductItem } from "../blocks/productItem";

export class ShoppingCartPage {

    async getProductItems() {
        const productItems = await $$('.items > li');
        return productItems.map(productItem => new ProductItem(productItem)); //новый массив из экземпляров класса ProductItem
    };

    async getProductItemByName(name) {
        return (await this.getProductItems()).find(async item =>
            (await item.getName()) === name
        );
    };
}
