import { Flag } from "./Flag.js";
import { FlagSchema } from "./FlagSchema.js";
import { Schema } from "./Schema.js"

class Parser {

    port = new FlagSchema('-p', 0, 'number');
    logging = new FlagSchema('-l',false,'boolean');
    dir = new FlagSchema('-d','','string');


    schema = new Schema([this.port,this.logging,dir]);

    portArg = new Flag('-x',0);
    loggingArg = new Flag('-l');
    dirArg = new Flag('-d', '/usr/logs');

    constructor(){
        console.log();
    }
    /*
    get(){
        return ;
    }
    set(value){
        this. = value;
    }*/
}