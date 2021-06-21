import {Schema} from './Schema.js';
import {Flag} from './Flag.js';
import {FlagSchema} from './FlagSchema.js';


class Parser{
    constructor(flagSchemas, flag){
        this.flagSchemas =flagSchemas;
        this.flag = flag;
        this.verifySchema= new Schema;
       
    }
    
    parse(flag){
        
        let res= '';
        let isValid=false;
        this.flagSchemas.forEach(flagSchema => {
            if(flag.id === flagSchema.id){
                if(!this.verifySchema.isNull(flag)){

                    isValid=this.verifySchema.isValid(flag.value)===flagSchema.dataType;
                    if(isValid===true){
                        res= `Argumento: ${flag} + IsMatch: ${isValid}`;
                     }else{
                        throw TypeError('The Argument not Match with Schema specify');
                     }
                }else{
                    const flagSetDefault= this.verifySchema.setDefault(flag);
                    res= `Argument Default: ${flagSetDefault}`;
                }
            }
        });
        return res;
    }
   



}
const port = new FlagSchema('-p', 0, 'number');
const logging = new FlagSchema('-l', false, 'boolean');
const dir = new FlagSchema('-d', '', 'string');

const portArg = new Flag('-p',8080);
const loggingArg = new Flag('-l');
const dirArg= new Flag('-d','/usr/logs');

const parser= new Parser([port, logging, dir],[portArg, loggingArg, dirArg]);

console.log('MATCH');
console.log(parser.parse(portArg));

export{Parser};