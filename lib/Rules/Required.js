"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Required {
    passes(attribute, value) {
        return value != null && value != '' && value != undefined;
    }
    message() {
        return 'The :attribute is required.';
    }
}
exports.default = Required;
