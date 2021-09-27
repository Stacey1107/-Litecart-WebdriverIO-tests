import { Actions } from "../../core/wdio/actions";
import { Waits } from "../../core/wdio/waits";
import { Checks } from "../../core/wdio/checks";
export class WebElement extends Actions {
    constructor(wdioElement) {
        super(wdioElement);
        this.check = new Checks(this.wdioElement);
    };
};