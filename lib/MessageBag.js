"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageBag {
    /**
     * Create a new message bag.
     *
     * @param  {Obj}  messages
     * @return void
     */
    constructor(messages = {}) {
        /**
         * All of registerd messages.
         *
         * @type {Obj}
         */
        this.messages = {};
        this.messages = messages;
    }
    add(attribute, value) {
        if (!(attribute in this.messages))
            this.messages[attribute] = [];
        this.messages[attribute].push(value);
    }
    isNotEmpty() {
        return Object.keys(this.messages).length > 0;
    }
    get() {
        return this.messages;
    }
}
exports.default = MessageBag;
