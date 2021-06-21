import { Argument } from './Argument.js'
import { ArgumentSchema } from './ArgumentSchema.js'
import { Schema } from './Schema.js'


class CompleteArgument{

    constructor(argumentList, argumentSchemas) {
        this.argumentList = argumentList;
        this.argumentSchemas = argumentSchemas;
    }

    completeMissingArguments() {
        this.argumentSchemas.forEach(argumentSchema => {
            if(!this.existFlag(argumentSchema)) {
                var argument = new Argument(argumentSchema.flag, argumentSchema.defaultValue);
                this.argumentList.push(argument);
            }                
        });
        return this.argumentList;
    }
    
    completeDefaultValues() {
        this.argumentList.forEach(argument => {
            if(argument.value === null) {
                argument.value = this.returnDefaultValue(argument.flag);
            }                
        });
        return this.argumentList;
    }

    returnDefaultValue(flag) {
        var value;
        this.argumentSchemas.forEach(argumentSchema => {
            if(flag === argumentSchema.flag) 
                value = argumentSchema.defaultValue;                        
        });
        return value;
    }

    existFlag(argumentSchema) {
        let exist = false;
        this.argumentList.forEach(argument => {
            if (argument.flag === argumentSchema.flag) {
                exist = true;
            }
        });
        return exist;
    }
}

/*const port = new ArgumentSchema('-p', 0, 'number', true)
const logging = new ArgumentSchema('-l', false, 'boolean', false)
const dir = new ArgumentSchema('-d', '', 'string', true)


const portArg = new Argument('-p', 8080)
const loggingArg = new Argument('-l', false)
const dirArg = new Argument('-d', 'alñjfñaljdf')

const portArg1 = new Argument('-p')
const loggingArg1 = new Argument('-l')
const dirArg1 = new Argument('-d')

const complete = new CompleteArgument([dirArg1, loggingArg1, portArg1], [port, logging, dir]);

//console.log(complete.completeMissingArguments());
console.log(complete.completeDefaultValues());  */


export { CompleteArgument }