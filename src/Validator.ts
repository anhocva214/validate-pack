import { Obj } from './Contracts/Object'
import MessageBag from './MessageBag'
import {Rule} from './Contracts/Rule'


export default class Validator
{
  /**
   * The data under validation.
   *
   * @type {Obj}
   */
  protected data: Obj

  /**
   * The rules to be applied to the data.
   *
   * @type {object}
   */
  protected rules: object

  /**
   * The object of error messages.
   *
   * @type {MessageBag | undefined}
   */
  protected messages: MessageBag | undefined

  /**
   * The object of custom error messages.
   *
   * @type {object}
   */
  protected customMessages: object = {}

  /**
   * Create a new validator
   *
   * @param  {Obj}  data
   * @param  {object}  rules
   * @param  {object}  [messages = {}]
   * @return void
   */
  constructor(data: Obj, rules: object, messages: object = {}, ) {
    this.data = data
    this.rules = rules
    this.customMessages = messages
  }

  /**
   * Determine if the data passes the validation rules.
   *
   * @return {boolean}
   */
  passes(): boolean
  {
    this.messages = new MessageBag

    for (const [attribute, rules] of Object.entries(this.rules)) {
      for (const rule of rules) {
        this.validateAttribute(attribute, rule)
      }
    }

    return ! this.messages.isNotEmpty()
  }

  /**
   * Validate a given attribute against a rule.
   *
   * @param  {string}  attribute
   * @param  {Rule}  rule
   * @return {void}
   */
  validateAttribute(attribute: string, rule: Rule): void
  {
    if (! rule.passes(attribute, this.getAttributeValue(attribute))) {
      this.messages?.add(attribute, rule.message().replace(':attribute', attribute))
    }
  }

  /**
   * Get the value of given attribute.
   *
   * @param  {string}  attribute
   * @return {any}
   */
  getAttributeValue(attribute: string): any
  {
    return this.data[attribute]
  }

  fails(): boolean
  {
    return ! this.passes()
  }

  errors(): Obj | undefined
  {
    return this.messages?.get()
  }
}