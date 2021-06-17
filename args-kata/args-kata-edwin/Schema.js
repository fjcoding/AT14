import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {
    constructor(flagSchemas, flags) {
        this.flagSchemas = flagSchemas;
        this.flags = flags;
        this.detector = new TypeDetector;
    }

    verifySchema() {
        this.flagSchemas.forEach(flagSchema => {
            if(this.existFlag(flagSchema)) 
                this.isFlagValid(flagSchema);
            else
                this.flags.push(flag = new Flag(flagSchema.id, flagSchema.value));
        });
    }

    existFlag(flagSchema) {
        let exist = false;
        this.flags.forEach(flag => {
            if (flagSchema.id === flag.id) {
                exist = true;
            }
        });
        return exist;
    }

    isFlagValid(flagSchema) {
        let valid = false;
        this.flags.forEach(flag => {
            if (flagSchema.id === flag.id) {
                valid = this.isValueValid(flagSchema.id, this.detector.detectType(flag.value), flagSchema.dataType, flagSchema.isRequired);
            }
        });
        return valid;  
    }   

    isValueValid(flagId, flagType, flagTypeSchema, valueRequired) {
        let valid = false;
        if(flagType != null){
            if(flagType != flagTypeSchema)   
                console.log("The value asigned to " + flagId + " is a type no valid.");
            return(flagType === flagTypeSchema);            
        }            
        else 
            {
                if(valueRequired) {
                    console.log("The flag " + flagId + " requires a value associated");
                    return false;
                }                    
                else
                    return true;
            }            
    }   
}

const port = new FlagSchema('-p', 0, 'number', true)
const logging = new FlagSchema('-l', false, 'boolean', false)
const dir = new FlagSchema('-d', '', 'string', true)

const portArg = new Flag('-p')
const loggingArg = new Flag('-l', 8565)
const dirArg = new Flag('-d', 100)

const schema = new Schema([port, logging, dir], [portArg, loggingArg, dirArg]);

//console.log(schema.existFlag(port));
//schema.isFlagValid(port);
//schema.verifySchema([port, logging, dir], [portArg, loggingArg, dirArg]);


schema.verifySchema();


//console.log(schema.isValid(loggingArg));
//console.log(schema.isValid(dirArg));  


export { Schema }
