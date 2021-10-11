import { Rule } from '../../Contracts/Rule';
export declare class Email implements Rule {
    passes(attribute: string, value: any): boolean;
    message(): string;
}
