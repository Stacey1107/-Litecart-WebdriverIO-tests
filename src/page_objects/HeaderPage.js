class HeaderPage {
    get categories() {
        return $('//*[@class = "categories dropdown"]');
    }

    get categoriesOption() {
        return $('=Rubber Ducks');
    }

    async selectCategory() {
        await this.categories.click();
        await this.categoriesOption.click();
    }

    get cartIcon() {
        return $('div#cart');
    }

    get cartCounter() {
        return $('//*[@class="badge quantity"]');
    }
}

export default new HeaderPage();