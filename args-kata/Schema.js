import { Argument } from './Argument.js'
import { ArgumentSchema } from './ArgumentSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {
    constructor(argumentSchemas) {
        this.argumentSchemas = argumentSchemas;
        this.detector = new TypeDetector;
        this.errorMessages = [];
    }

    isArgumentValid(argument) {
        let valid = false;
        this.argumentSchemas.forEach(argumentSchema => {
            if (argumentSchema.flag === argument.flag) {
                valid = this.isValueValid(argumentSchema.flag, this.detector.detectType(argument.value), argumentSchema.dataType, argumentSchema.isRequired);
            }
        });
        this.existFlagType(argument);
        return valid;  
    } 
          
    isValueValid(flag, argumentType, argumentTypeSchema, valueRequired) {
        if(argumentType != null)
            return this.isEqualsTypes(flag, argumentType, argumentTypeSchema); 
        else 
            return this.isRequiredValue(flag, valueRequired);
    }   

    isEqualsTypes(flag, typeOne, typeTwo) {
        if(typeOne === typeTwo) 
            return true;
        else {
            this.errorMessages.push(this.messageNoValidValue(flag));
            return false;
        }                     
    }

    messageNoValidValue(flag) {
        return "The value asigned to " + flag + " is a type no valid.";
    }

    isRequiredValue(flag, value) {
        if(value) {
            this.errorMessages.push(this.messageRequiredValue(flag));
            return false;
        }
        else 
            return true;            
    }

    messageRequiredValue(flag) {
        return "The flag " + flag + " requires a value associated";
    }

    existFlagType(argument) {
        let count = 0;
        this.argumentSchemas.forEach(argumentSchema => {
            if (argumentSchema.flag === argument.flag) {
                count++;    
            }
        });
        if(count === 0)
            this.errorMessages.push(this.messageIsNotValidFlag(argument.flag));
    } 

    messageIsNotValidFlag(flag) {
        return "The flag " + flag + " is not a flag valid for the schema.";
    }
}

/*const port = new ArgumentSchema('-p', 0, 'number', true)
const logging = new ArgumentSchema('-l', false, 'boolean', false)
const dir = new ArgumentSchema('-d', '', 'string', true)


const portArg = new Argument('-p', 8080)
const loggingArg = new Argument('-l', false)
const dirArg = new Argument('-d', 'alñjfñaljdf')

const schema = new Schema([port, logging, dir]);

console.log(schema.isArgumentValid(portArg));


//console.log(schema.isValid(loggingArg));
//console.log(schema.isValid(dirArg));  */


export { Schema }