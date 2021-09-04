class CategoriesPage {
    get subcategory() {
        return $('//*[@class = "category-2"]');
    }

    async getToSubcategory() {
        await this.subcategory.click();
    }
}

export default new CategoriesPage();