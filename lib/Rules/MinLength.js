"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MinLength {
    constructor(lenghtMin) {
        this.lenghtMin = lenghtMin;
    }
    passes(attribute, value) {
        if (!!value)
            return value.length >= this.lenghtMin;
        else
            return false;
    }
    message() {
        return `Minimum :attribute length is ${this.lenghtMin}`;
    }
}
exports.default = MinLength;
