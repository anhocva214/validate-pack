"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
class Required {
    passes(attribute, value) {
        return value != null && value != '' && value != undefined;
    }
    message() {
        return 'The :attribute is required.';
    }
}
exports.Required = Required;
