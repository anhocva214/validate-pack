import {Obj} from './Contracts/Object'

export default class MessageBag
{
  /**
   * All of registerd messages.
   *
   * @type {Obj}
   */
  protected messages: Obj = {}

  /**
   * Create a new message bag.
   *
   * @param  {Obj}  messages
   * @return void
   */
  constructor(messages: Object = {})
  {
    this.messages = messages
  }

  add(attribute: string, value: string): void
  {
    if (!(attribute in this.messages))
      this.messages[attribute] = []

    this.messages[attribute].push(value)
  }

  isNotEmpty(): boolean
  {
    return Object.keys(this.messages).length > 0
  }

  get(): Obj
  {
    return this.messages
  }
}