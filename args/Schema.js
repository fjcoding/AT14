import {Flag} from './Flag.js';
import {FlagSchema} from './FlagSchema.js';
import {TypeDetector} from './TypeDetector.js';

class Schema{

    constructor(flagSchemas){
        this.flagSchemas =flagSchemas;
        this.detector= new TypeDetector;
        this.specifySchema= new FlagSchema;
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

    isNull(a){
        if(a.value==null){
        const isN= this.detector.detectType(a.value);
        isN.setValue(flagSchema.getDefaultFlagSchema());
      }
      return isN;
    }

    getSchema(){
       return this.specifySchema.getFlagSchemaId();
    }
    

    

}

const port = new FlagSchema('-p', 0, 'number');
const logging = new FlagSchema('-l', false, 'boolean');
const dir = new FlagSchema('-d', '', 'string');

const schema = new Schema([port, logging, dir]);

const portArg = new Flag('-p', 8080);
const loggingArg = new Flag('-l');
const dirArg= new Flag('-d','/usr/logs');

const idSchemaF= new FlagSchema();
const idSchema= new Schema(idSchemaF);


const espSchema = new Schema(portArg);


console.log(schema.isValid(portArg));
console.log(schema.isValid(loggingArg));
console.log(schema.isValid(dirArg));





export{Schema};