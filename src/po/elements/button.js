import { Actions } from '../../core/wdio/actions.js';
export class Button extends Actions {

    async isEnabled() {
        await this.wdioElement.isEnabled();
    };

    async isClickable() {
        await this.wdioElement.isClickable();
    };
};