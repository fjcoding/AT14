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

    validateId(flag,flagSchema) { return (compare(flag.id,flagSchema.id)); }

    validateType(){}

    validateFlag(flag){

        let validationResult = false;
        
        flagSchemas.forEach(flagSchema => {
            if(validateId(flag,flagSchema)){
                
            }
            
        });

    }


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


const port = new FlagSchema('-p', 0, 'number')
const logging = new FlagSchema('-l', false, 'boolean')
//const dir = new FlagSchema('-d', '', 'string')

const schema = new Schema([port/*, logging, dir*/])

const portArg = new Flag('-p', 8080)
//const loggingArg = new Flag('-l')
//const dirArg = new Flag('-d', '/usr/logs')

print(schema.validateId(portArg,port));
//console.log(schema.isValid(loggingArg));
//console.log(schema.isValid(dirArg));

