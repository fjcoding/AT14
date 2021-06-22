import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {

    //Execution

    constructor(flagSchemas = []) {

        this.flagSchemas = flagSchemas;
        this.detector = new TypeDetector;
    }

    //Functions

    compare(valueOne,valueTwo){ 

        return valueOne === valueTwo; 
    }

    validateFlagId(flag = new Flag,flagSchema = new FlagSchema) { 

        return this.compare(flag.getId(),flagSchema.getId()); 
    }

    validateFlagType(flag = new Flag,flagSchema = new FlagSchema){ 

        let dataType = this.detector.detectType(flag.getValue());

        return this.compare(flagSchema.getDataType(),dataType);
    }

    setDefaultValue(flag = new Flag,flagSchema = new FlagSchema){


        if(this.validateFlagType(flag,flagSchema)){

            return true;
        }
        else{

            let defaultValue = flagSchema.getDefaultValue();

            flag.setValue(defaultValue);

            return this.compare(flag.getValue(),defaultValue);
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

export { Schema };