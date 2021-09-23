import { ProductItemsList } from "../blocks/productItemsList";
import { BasePage } from './BasePage.js';

export class ShoppingCartPage extends BasePage {
    constructor() {
        super('checkout');
    };

    productItemsList = new ProductItemsList();
}
