export default class Required implements Rule {
    passes(attribute: string, value: any): boolean;
    message(): string;
}
