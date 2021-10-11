interface Rule {
    /**
     * Determine if the validation rule passes.
     *
     * @param  {string}  attribute
     * @param  {any}  value
     * @return {boolean}
     */
    passes(attribute: string, value: any): boolean;
    /**
     * Get the validation error message.
     *
     * @return {string}
     */
    message(): string;
}
