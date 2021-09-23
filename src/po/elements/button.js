import { Actions } from '../../core/wdio/actions.js';
import { Waits } from '../../core/wdio/waits.js';
export class Button extends Actions {
    constructor(wdioElement) {
        super(wdioElement);
        this.wait = new Waits(this.wdioElement);
    };

    async isEnabled() {
        await this.wdioElement.isEnabled();
    };

    async isClickable() {
        await this.wdioElement.isClickable();
    };
};