class SubcategoriesPage {

    getDuck(color) {
        return $(`//*[@data-name='${color} Duck']`);
    }

    get technicalDataTab() {
        return $('=Technical Data');
    }

    get sizeDropdown () {
        return $('//*[@name="options[Size]"]');
    }

    get quantityInput () {
        return $('//input[@type="number"]');
    }

    get addToCartButton () {
        return $('//button[@name="add_cart_product"]');
    }

}

export default new SubcategoriesPage();