import MessageBag from './MessageBag';
export default class Validator {
    /**
     * The data under validation.
     *
     * @type {Obj}
     */
    protected data: Obj;
    /**
     * The rules to be applied to the data.
     *
     * @type {object}
     */
    protected rules: object;
    /**
     * The object of error messages.
     *
     * @type {MessageBag | undefined}
     */
    protected messages: MessageBag | undefined;
    /**
     * The object of custom error messages.
     *
     * @type {object}
     */
    protected customMessages: object;
    /**
     * Create a new validator
     *
     * @param  {Obj}  data
     * @param  {object}  rules
     * @param  {object}  [messages = {}]
     * @return void
     */
    constructor(data: Obj, rules: object, messages?: object);
    /**
     * Determine if the data passes the validation rules.
     *
     * @return {boolean}
     */
    passes(): boolean;
    /**
     * Validate a given attribute against a rule.
     *
     * @param  {string}  attribute
     * @param  {Rule}  rule
     * @return {void}
     */
    validateAttribute(attribute: string, rule: Rule): void;
    /**
     * Get the value of given attribute.
     *
     * @param  {string}  attribute
     * @return {any}
     */
    getAttributeValue(attribute: string): any;
    fails(): boolean;
    errors(): Obj | undefined;
}
