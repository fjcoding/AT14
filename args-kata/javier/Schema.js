import { Argument } from './Argument.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'
import { Type } from './Type.js'

class Schema {
    constructor(flagSchemas, Arguments) {
        this.flagSchemas = flagSchemas;
        this.Arguments   = Arguments;
        this.detector    = new TypeDetector;
        this.setDefaultValues();
    }

    setDefaultValues(){
        //console.log("setDefault");
        this.flagSchemas.forEach(flagSchema => {
            this.Arguments.forEach(argument =>  {
                if (flagSchema.id === argument.flagId) {
                    if(argument.Value === null){
                        //console.log(flagSchema.id +" ** "+ flagSchema.defaultValue);                
                        argument.setValue(flagSchema.defaultValue)                
                    }                     
                }
            });
        });
    }

    isValid() {
        let isValid = true;
        this.flagSchemas.forEach(flagSchema => {
            this.Arguments.forEach(argument =>  {
                if (flagSchema.id === argument.flagId) {
                    const flagType = new Type(argument.Value, flagSchema.dataType);
                    //console.log(argument.Value +" ** "+ flagSchema.dataType + "**" +flagType.getType());
                    isValid = isValid && (flagSchema.dataType === flagType.getType());                   
                    //console.log(argument.flagId + " " + flagSchema.dataType + " " +flagType+ " "+isValid);                    
                }
            });            
        });
        return isValid;
    }
    /* DIVIDR FALG Y VALUE OTRA FUNCION*/
}

export {Schema}