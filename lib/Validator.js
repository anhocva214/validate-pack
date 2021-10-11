"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageBag_1 = __importDefault(require("./MessageBag"));
class Validator {
    /**
     * Create a new validator
     *
     * @param  {Obj}  data
     * @param  {object}  rules
     * @param  {object}  [messages = {}]
     * @return void
     */
    constructor(data, rules, messages = {}) {
        /**
         * The object of custom error messages.
         *
         * @type {object}
         */
        this.customMessages = {};
        this.data = data;
        this.rules = rules;
        this.customMessages = messages;
    }
    /**
     * Determine if the data passes the validation rules.
     *
     * @return {boolean}
     */
    passes() {
        this.messages = new MessageBag_1.default;
        for (const [attribute, rules] of Object.entries(this.rules)) {
            for (const rule of rules) {
                this.validateAttribute(attribute, rule);
            }
        }
        return !this.messages.isNotEmpty();
    }
    /**
     * Validate a given attribute against a rule.
     *
     * @param  {string}  attribute
     * @param  {Rule}  rule
     * @return {void}
     */
    validateAttribute(attribute, rule) {
        var _a;
        if (!rule.passes(attribute, this.getAttributeValue(attribute))) {
            (_a = this.messages) === null || _a === void 0 ? void 0 : _a.add(attribute, rule.message().replace(':attribute', attribute));
        }
    }
    /**
     * Get the value of given attribute.
     *
     * @param  {string}  attribute
     * @return {any}
     */
    getAttributeValue(attribute) {
        return this.data[attribute];
    }
    fails() {
        return !this.passes();
    }
    errors() {
        var _a;
        return (_a = this.messages) === null || _a === void 0 ? void 0 : _a.get();
    }
}
exports.default = Validator;
