import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {

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

    compare(valueOne,valueTwo){ return (valueOne === valueTwo) ? true : false; }

    validateFlagId(flag,flagSchema) { return compare(flag.id,flagSchema.id); }

    setDefaultValue(flag,flagSchema){

        let flagType = this.detector.detectType(flag.value);

        if (compare(flagSchema.dataType,flagType)){

            return 
        }
        else {

        }

    }
    
    validateFlagType(flag,flagSchema){ 

        if (this.validateFlagId(flag,flagSchema)){

            let flagType = this.detector.detectType(flag.value);

            return compare(flagSchema.dataType,flagType);

        }
    }

}

//External Functions

const print = string =>{ console.log(string); }

const compare = (valueOne,valueTwo) => { return (valueOne === valueTwo) ? true : false; }

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