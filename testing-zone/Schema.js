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
    
    validateFlagType(flag,flagSchema){ 

        if (this.validateFlagId(flag,flagSchema)){

            let flagType = this.detector.detectType(flag.value);

            return compare(flagSchema.dataType,flagType);

        }
    }

   /* validatFlagType(flag,flagSchema){

        let validationResult = false;
        
        flagSchemas.forEach(flagSchema => {

            if(validateFlagId(flag,flagSchema)){

                let flagType = this.detector.detectType(flag.value)
                flagType = compare(flagSchema.dataType);
            }
            
        });

    }
*/

    comparId(value,array){

        let validationResult = false;

        array.forEach(element => {

            validationResult = this.compare(value.id,element.id);                        
        });
        return validationResult;
    }

}

//Functions

const print = string =>{ console.log(string); }

const compare = (valueOne,valueTwo) => { return (valueOne === valueTwo) ? true : false; }


//const port = new FlagSchema('-p', 0, 'number')
const logging = new FlagSchema('-l', false, 'boolean')
//const dir = new FlagSchema('-d', '', 'string')

const schema = new Schema([logging/*port, logging, dir*/])

//const portArg = new Flag('-p', 8080)
const loggingArg = new Flag('-l')
//const dirArg = new Flag('-d', '/usr/logs')

print(schema.validateFlagType(loggingArg,logging));
//console.log(schema.isValid(loggingArg));
//console.log(schema.isValid(dirArg));

