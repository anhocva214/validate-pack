export default class MessageBag {
    /**
     * All of registerd messages.
     *
     * @type {Obj}
     */
    protected messages: Obj;
    /**
     * Create a new message bag.
     *
     * @param  {Obj}  messages
     * @return void
     */
    constructor(messages?: Object);
    add(attribute: string, value: string): void;
    isNotEmpty(): boolean;
    get(): Obj;
}
