import { Argument } from './Argument.js'
import { ArgumentSchema } from './ArgumentSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {
    constructor(argumentSchemas) {
        this.argumentSchemas = argumentSchemas;
        this.detector = new TypeDetector;
    }

    isArgumentValid(argument) {
        let valid = false;
        this.argumentSchemas.forEach(argumentSchema => {
            if (argumentSchema.flag === argument.flag) {
                valid = this.isValueValid(argumentSchema.flag, this.detector.detectType(argument.value), argumentSchema.dataType, argumentSchema.isRequired);
            }
        });
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
        else
            console.log("The value asigned to " + flag + " is a type no valid.");
            return false;         
    }

    isRequiredValue(flag, value) {
        if(value) {
            console.log("The flag " + flag + " requires a value associated");
            return false;
        }
        else 
            return true;            
    }
}

/*const port = new ArgumentSchema('-p', 0, 'number', true)
const logging = new ArgumentSchema('-l', false, 'boolean', false)
const dir = new ArgumentSchema('-d', '', 'string', true)

const portArg = new Argument('-p', 8080)
const loggingArg = new Argument('-l', false)
const dirArg = new Argument('-d', 100)

const schema = new Schema([port, logging, dir]);

console.log(schema.isArgumentValid(dirArg));


//console.log(schema.isValid(loggingArg));
//console.log(schema.isValid(dirArg));  */


export { Schema }