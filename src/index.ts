import Validator from './Validator'
import Required from './Rules/Required'

const validator = new Validator(
  { username: null },
  { username: [new Required] }
)

console.log('Validator is failed?', validator.fails())
console.log('Errors bag:', validator.errors())

