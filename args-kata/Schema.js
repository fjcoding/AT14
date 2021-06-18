import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {
    constructor(flagSchemas) {
        this.flagSchemas = flagSchemas;
        this.detector = new TypeDetector;
    }

    isFlagValid(flag) {
        let valid = false;
        this.flagSchemas.forEach(flagSchema => {
            if (flagSchema.id === flag.id) {
                valid = this.isValueValid(flagSchema.id, this.detector.detectType(flag.value), flagSchema.dataType, flagSchema.isRequired);
            }
        });
        return valid;  
    } 
          
    isValueValid(flagId, flagType, flagTypeSchema, valueRequired) {
        if(flagType != null)
            return this.isEqualsTypes(flagId, flagType, flagTypeSchema); 
        else 
            return this.isRequiredValue(flagId, valueRequired);
    }   

    isEqualsTypes(flagId, typeOne, typeTwo) {
        if(typeOne === typeTwo) 
            return true;
        else
            console.log("The value asigned to " + flagId + " is a type no valid.");
            return false;         
    }

    isRequiredValue(flagId, value) {
        if(value) {
            console.log("The flag " + flagId + " requires a value associated");
            return false;
        }
        else 
            return true;            
    }
}

/*const port = new FlagSchema('-p', 0, 'number', true)
const logging = new FlagSchema('-l', false, 'boolean', false)
const dir = new FlagSchema('-d', '', 'string', true)

const portArg = new Flag('-p', 8080)
const loggingArg = new Flag('-l', 8565)
const dirArg = new Flag('-d', 100)

const schema = new Schema([port, logging, dir]); */

//console.log(schema.existFlag(port));
//schema.isFlagValid(port);
//schema.verifySchema([port, logging, dir], [portArg, loggingArg, dirArg]);


//console.log(schema.isFlagValid(loggingArg));


//console.log(schema.isValid(loggingArg));
//console.log(schema.isValid(dirArg));  


export { Schema }