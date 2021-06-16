import {Schema} from './Schema.js';
import {Flag} from './Flag.js';


class Parser{
    constructor(){
        this.schema =schema;
        this.args = new Flag;
        this.schema =new Schema;
    }
    parse(args){
        args.array.forEach(element => {
            //args.type;
        });
    }
    args= Object.getOwnPropertyNames(args);

}

//console.log(args);