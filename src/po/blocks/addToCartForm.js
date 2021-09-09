import { Button } from '../elements/button.js';
import { Select } from '../elements/select.js';
import { Input } from '../elements/input.js';

export class AddToCartForm {

    get technicalDataTab() {
        return new Button($('=Technical Data'));
    };

    get sizeSelect() {
        return new Select($('[name="options[Size]"]'));
    };

    get quantityInput() {
        return new Input($('[type=number]'));
    };

    get addToCartButton() {
        return new Button($('[name=add_cart_product]'));
    };
}

