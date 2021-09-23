export class Input {
    constructor(inputArea) {
        this.inputArea = inputArea;
    };

    async setValue(newValue) {
        await this.inputArea.setValue(newValue);
    };

    async addValue(value) {
        await this.inputArea.addValue(value);
    };

    async getValue() {
        await this.inputArea.getValue();
    };

    async clearValue() {
        await this.inputArea.clearValue();
    };
}
