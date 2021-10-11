"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinLength = void 0;
class MinLength {
    constructor(lenghtMin) {
        this.lenghtMin = lenghtMin;
    }
    passes(attribute, value) {
        if (!!value && typeof value == 'string')
            return value.length >= this.lenghtMin;
        return false;
    }
    message() {
        return `Minimum :attribute length is ${this.lenghtMin}`;
    }
}
exports.MinLength = MinLength;
