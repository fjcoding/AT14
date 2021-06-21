import { DefaultValue } from './DefaultValue.js';
import {Flag} from './Flag.js';
import {FlagSchema} from './FlagSchema.js';
import {TypeDetector} from './TypeDetector.js';


class Schema{

    constructor(flagSchemas){
        this.flagSchemas =flagSchemas;
        this.detector= new TypeDetector;
        this.flag=new Flag;
        this.defaultVal= new DefaultValue;
    }

    isValid(flag){
        let isValid = false;
        this.flagSchemas.forEach(flagSchema => {
            if(flag.id===flagSchema.id){
                const flagType =this.detector.detectType(flag.value);
                isValid =flagSchema.dataType === flagType;
            }
        }); 
        return isValid;
    }

    isNull(flag){
        let isNull=false;
        if(flag.value==null){
            isNull=true;
        }
      return isNull;
    }

    setDefault(flag){
        this.flagSchemas.forEach(flagSchema =>{
            if(flag.id===flagSchema.id){
               const flagDefaultValue= this.defaultVal.getDefaultValue(flag);
               flag.value= flagDefaultValue;
            }
        });
        return flag;

    }

   

    

}

const port = new FlagSchema('-p', 0, 'number');
const logging = new FlagSchema('-l', false, 'boolean');
const dir = new FlagSchema('-d', '', 'string');

const schema = new Schema([port, logging, dir]);

const portArg = new Flag('-p');
const loggingArg = new Flag('-l');
const dirArg= new Flag('-d','/usr/logs');




console.log('Set default flag');
console.log(schema.setDefault(portArg));






export{Schema};