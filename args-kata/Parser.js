import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'
import { Schema } from './Schema.js'

class Parser{
    constructor(strCommand, flagSchemas) {
        this.strArgs = strCommand;
        this.flagSchemas = flagSchemas;
        this.schema = new Schema(flagSchemas);
    }

    isFlag(str){
        return (str.charAt(0) === "-");
    }   

    obtainFlags(str) {
        let arrayArgs = str.split(" ");
        var flags = [];
        for (let i = 0; i < arrayArgs.length; i++) {
            if(this.isFlag(arrayArgs[i])){ 
                if(i < arrayArgs.length - 1)  {
                    if(this.isFlag(arrayArgs[i + 1]) == false)
                        var flag = new Flag(arrayArgs[i], arrayArgs[i + 1]); 
                    else 
                        var flag = new Flag(arrayArgs[i]);
                }                    
                else 
                    var flag = new Flag(arrayArgs[i]);
                flags.push(flag);
            }    
        }       
        return flags;
    }

    areFlagsValids(flags, flagSchemas) {
        let errorsCounter = 0;
        flags.forEach(flag => {
            if(!this.schema.isFlagValid(flag))
                errorsCounter++;
        });
        return (errorsCounter === 0);
    }

    parseador() {
        this.reviewEstructure(this.strArgs);
        schema = new Schema(this.flagSchemas, this.flags);
        schema.verifySchema();
    }

}

/*const port = new FlagSchema('-p', 0, 'number', true)
const logging = new FlagSchema('-l', false, 'boolean', false)
const dir = new FlagSchema('-d', '', 'string', true)

const parser = new Parser("-l 6080 -p fgfgdfg -d /usr/logs", [port, logging, dir]);
console.log(parser.areFlagsValids(parser.obtainFlags("-l -p 8080 -d /usr/logs"), [port, logging, dir]));  */

export { Parser }

