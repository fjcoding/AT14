import { Flag } from "./Flag.js";
import { Schema } from "./Schema.js";
import { FlagSchema } from "./FlagSchema.js";

class Parser {

    //flagSchemas


    port = new FlagSchema('-p', 0 , 'number');
    logging = new FlagSchema('-l', false ,'boolean');
    dir = new FlagSchema('-d', '', 'string');

    schema = new Schema([this.logging,this.dir,this.port])

    portArg = new Flag('-p',8080);
    loggingArg = new Flag('-l');
    dirArg = new Flag('-d','/usr/logs');

    constructor(command = ''){

        console.log(this.schema.validateFlag(this.portArg));
        console.log(this.schema.validateFlag(this.loggingArg));
        console.log(this.schema.validateFlag(this.dirArg));

    }
    /*
    get(){
        return ;
    }
    set(value){
        this. = value;
    }*/
}
new Parser();
export { Parser }