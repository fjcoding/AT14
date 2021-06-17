import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'
import { Schema } from './Schema.js'

class Parser{
    constructor(strCommand, flagSchemas) {
        this.strArgs = strCommand;
        this.flagSchemas = flagSchemas;
        this.flags = [];
    }

    isFlag(str){
        return (str.charAt(0) === "-");
    }

    isLetter(str) {
        var letter = (str) => {
            let ascii = str.toUpperCase().charCodeAt(0);
            return ascii > 64 && ascii < 91;
        };    
    }    

    reviewEstructure(str) {
        let arrayArgs = str.split(" ");
        for (let i = 0; i < arrayArgs.length - 1; i++) {
            if(this.isFlag(arrayArgs[i])){ 
                if(this.isFlag(arrayArgs[i + 1]) == false)
                    var flag = new Flag(arrayArgs[i], arrayArgs[i + 1]);  
                else 
                    var flag = new Flag(arrayArgs[i]);
                this.flags.push(flag);
            }    
        }       

    }

    parseador() {
        this.reviewEstructure(this.strArgs);
        var schema = new Schema(this.flagSchemas, this.flags);
        schema.verifySchema();
    }

}

const port = new FlagSchema('-p', 0, 'number', true)
const logging = new FlagSchema('-l', false, 'boolean', false)
const dir = new FlagSchema('-d', '', 'string', true)

const parser = new Parser("-l 6080 -p fgfgdfg -d /usr/logs", [port, logging, dir]);
parser.parseador();

