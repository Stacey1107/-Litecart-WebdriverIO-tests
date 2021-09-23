import { Button } from "../elements/button.js";
import { Actions } from "../../core/wdio/actions.js";
export class ProductItem extends Actions {

    get removeIcon() {
        return new Button(this.wdioElement.$('[name=remove_cart_item]'));
    };

    async getName() {
        return this.getAttribute("data-name");
    };
}
