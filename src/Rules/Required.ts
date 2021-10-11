export default class Required implements Rule
{
  passes(attribute: string, value: any): boolean {
    return value != null && value != '' && value != undefined
  }

  message(): string {
    return 'The :attribute is required.'
  }
}