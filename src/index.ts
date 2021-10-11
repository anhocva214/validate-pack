import Validator from './Validator'
import {
  Email,
  Required,
  MinLength
} from './Rules'

const validator = new Validator(
  { username: 'testeetstst@gmailcom' },
  { username: [new Required, new MinLength(4), new Email] }
)

console.log('Validator is failed?', validator.fails())
console.log('Errors bag:', validator.errors())


export {
  Validator
}

