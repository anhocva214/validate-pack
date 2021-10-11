import { Rule } from '../../Contracts/Rule';
export declare class MinLength implements Rule {
    private lenghtMin;
    constructor(lenghtMin: number);
    passes(attribute: string, value: any): boolean;
    message(): string;
}
