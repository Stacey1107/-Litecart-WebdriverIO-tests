import { Category } from '../blocks/category.js';

export class Sidebar {
    constructor() {
        this.selectedCategory = '';
    };

    async getCategoriesList() {
        const categoryItems = await $$('#sidebar .nav > li');
        return categoryItems.map(categoryItem => new Category(categoryItem)); //новый массив из экземпляров класса Category
    };

    async getCategoryByName(name) {
        return (await this.getCategoriesList()).find(async item => (await item.getName()) === name);
    };

    async selectCategory(categoryName) {
        this.selectedCategory = await this.getCategoryByName(categoryName);
        await this.selectedCategory.click();
    };
}
