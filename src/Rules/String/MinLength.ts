import { Rule } from '../../Contracts/Rule'

export class MinLength implements Rule {

    private lenghtMin: number;

    constructor(lenghtMin: number) {
        this.lenghtMin = lenghtMin;
    }

    passes(attribute: string, value: any): boolean {
        if (!!value && typeof value == 'string')
            return value.length >= this.lenghtMin
        return false;
    }

    message(): string {
        return `Minimum :attribute length is ${this.lenghtMin}`
    }
}