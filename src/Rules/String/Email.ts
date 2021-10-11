import { Rule } from '../../Contracts/Rule'

export class Email implements Rule {

    passes(attribute: string, value: any): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!!value && typeof value === 'string') 
            return re.test(String(value).toLowerCase())
        return false
    }

    message(): string {
        return `:attribute must be email format`
    }
}