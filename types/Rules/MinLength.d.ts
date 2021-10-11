import { Rule } from '../Contracts/Rule';
export default class MinLength implements Rule {
    private lenghtMin;
    constructor(lenghtMin: number);
    passes(attribute: string, value: string): boolean;
    message(): string;
}
