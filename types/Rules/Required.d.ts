import { Rule } from '../Contracts/Rule';
export declare class Required implements Rule {
    passes(attribute: string, value: any): boolean;
    message(): string;
}
