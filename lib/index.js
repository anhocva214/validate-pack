"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("./Validator"));
const Required_1 = __importDefault(require("./Rules/Required"));
const validator = new Validator_1.default({ username: null }, { username: [new Required_1.default] });
console.log('Validator is failed?', validator.fails());
console.log('Errors bag:', validator.errors());
