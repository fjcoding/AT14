import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {

    //Execution

    constructor(flagSchemas) {

        this.flagSchemas = flagSchemas;
        this.detector = new TypeDetector;
    }

    /*
    isValid(flag) {
        let isValid = false;
        this.flagSchemas.forEach(flagSchema => {
            if (flag.id === flagSchema.id) {
                const flagType = this.detector.detectType(flag.value);
                isValid = flagSchema.dataType === flagType;
            }
        });
        return isValid;
    }
    */

    //Functions

    compare(valueOne,valueTwo){ 

        return (valueOne === valueTwo) 
            ? true 
            : false; 
    }

    validateFlagId(flag = new Flag,flagSchema = new FlagSchema) { 

        return this.compare(flag.id,flagSchema.id); 
    }

    validateFlagValue(flag = new Flag,flagSchema = new FlagSchema){ 

        return this.compare(flagSchema.dataType,this.detector.detectType(flag.value));
    }

    validateFlag(flag){
        
        this.flagSchemas.forEach(flagSchema => {

            let validationResult = false;

            if (this.validateFlagId(flag,flagSchema)){

                if(this.validateFlagType(flag,flagSchema)){

                    validationResult = true;
                }
                else{

                    flag.value = flagSchema.defaultValue;
                }
            }            
        });
    }
}

/*
const port = new FlagSchema('-p', 0, 'number')
const logging = new FlagSchema('-l', false, 'boolean')
const dir = new FlagSchema('-d', '', 'string')

const schema = new Schema([port, logging, dir])

const portArg = new Flag('-p', 8080)
const loggingArg = new Flag('-l')
const dirArg = new Flag('-d', '/usr/logs')

print(schema.validateFlagType(loggingArg,logging));
console.log(schema.isValid(loggingArg));
console.log(schema.isValid(dirArg));
*/

export {Schema};