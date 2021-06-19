import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {

    //Execution

    constructor(flagSchemas) {

        this.flagSchemas = flagSchemas;
        this.detector = new TypeDetector;
    }

    //Functions

    compare(valueOne,valueTwo){ 

        return valueOne === valueTwo; 
    }

    validateFlagId(flag = new Flag,flagSchema = new FlagSchema) { 

        return this.compare(flag.id,flagSchema.id); 
    }

    validateFlagType(flag = new Flag,flagSchema = new FlagSchema){ 

        let dataType = this.detector.detectType(flag.value);

        return this.compare(flagSchema.dataType,dataType);
    }

    setDefaultValue(flag = new Flag,flagSchema = new FlagSchema){

        if(this.validateFlagType(flag,flagSchema)){

            return true;
        }
        else{

            flag.setValue(flagSchema.defaultValue);
            return this.compare(flag.value,flagSchema.defaultValue);
        }
    }

    validateFlag(flag = new Flag){
        
        let validationResult = false;
        
        this.flagSchemas.forEach(flagSchema => {

            if (this.validateFlagId(flag,flagSchema)){

                validationResult = this.setDefaultValue(flag,flagSchema);
            }            
        });
        return validationResult;
    }
}

export {Schema};