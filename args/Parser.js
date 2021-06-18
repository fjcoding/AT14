import {Schema} from './Schema.js';
import {Flag} from './Flag.js';
import {FlagSchema} from './FlagSchema.js';
import {DefaultValue} from './DefaultValue.js';


class Parser{
    constructor(flagSchemas, flag){
        this.flagSchemas =flagSchemas;
        this.flag = flag;
        this.flagSchema =new FlagSchema;
       // this.detector= new TypeDetector;
        this.defaultValue= new DefaultValue;
    }
    
    parse(flag){
        const verifySchema = new Schema;
        let isValid=false;
        this.flagSchemas.forEach(flagSchema => {
            if(flag.id === flagSchema.id){
                isValid=verifySchema.isValid(flag.value)===flagSchema.dataType;
                
            }
        });
        return isValid;
    }
   



}
const port = new FlagSchema('-p', 0, 'number');
const logging = new FlagSchema('-l', false, 'boolean');
const dir = new FlagSchema('-d', '', 'string');

const portArg = new Flag('-p',8080);
const loggingArg = new Flag('-l');
const dirArg= new Flag('-d','/usr/logs');

const parser= new Parser([port, logging, dir]);

console.log('Parse');
console.log(parser.parse([portArg, loggingArg, dirArg]));
