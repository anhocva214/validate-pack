"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("./Validator"));
const Rules_1 = require("./Rules");
const validator = new Validator_1.default({ username: 'testeetstst@gmailcom' }, { username: [new Rules_1.Required, new Rules_1.MinLength(4), new Rules_1.Email] });
console.log('Validator is failed?', validator.fails());
console.log('Errors bag:', validator.errors());
