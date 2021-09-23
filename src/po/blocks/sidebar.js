import { Category } from './category.js';
import { Button } from '../elements/button.js';
export class Sidebar {
    constructor() {
        this.selectedCategory = '';
    };

    get categoryItems() {
        return $$('#sidebar .nav > li');
    };

    async getCategoriesList() {
        return this.categoryItems.map(categoryItem => new Category(categoryItem)); //новый массив из экземпляров класса Category
    };

    async getCategoryByName(name) {
        const categoriesList = await this.getCategoriesList();
        return categoriesList.find(async item => (await item.getName()) === name);
    };

    async selectCategory(categoryName) {
        this.selectedCategory = await this.getCategoryByName(categoryName);
        await new Button(this.selectedCategory.wdioElement).click(); //this.selectedCategory возвращает экземпляр класса Категория. В экземпляре класса Категория берется wdioElement и передается в Button
    };
}
