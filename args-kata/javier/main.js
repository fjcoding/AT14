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
                        argument.setValue(flagSchema.defaultValue)                
                    }                     
                }
            });
        });
    }

    isValid() {
        let isValid = false;
        this.flagSchemas.forEach(flagSchema => {
            this.Arguments.forEach(argument =>  {
                if (flagSchema.id === argument.flagId) {
                    const flagType = new Type(argument.Value).getType();
                    isValid = flagSchema.dataType === flagType;                   
                    console.log(argument.flagId + " " + flagSchema.dataType + " " +flagType+ " "+isValid);                    
                    if(!isValid){
                        console.log("into");
                        return false;                            
                    }    
                }
            });            
            /*
            if (argument.flagId === flagSchema.id) {
                //
                if(argument.Value === null){
                    argument.setValue(flagSchema.defaultValue)                
                }                     
                //const flagType = this.detector.detectType(argument.Value);
                const flagType = new Type(argument.Value).getType();
                console.log(flagType);
                isValid = flagSchema.dataType === flagType;
            }
            */
        });
        return isValid;
    }
    /* DIVIDR FALG Y VALUE OTRA FUNCION*/
}

const port = new FlagSchema('-p', 0, 'number')
const logging = new FlagSchema('-l', false, 'boolean')
const dir = new FlagSchema('-d', '', 'string')

const stringList  = new FlagSchema('-g', null, 'stringArray')
const integerList = new FlagSchema('-i', '', 'numberArray')
//const integerList = new FlagSchema('-d', '', 'numberArray')

// parser("-l -p 8080 -d /asd/sa")

const portArg = new Argument('-p',"8080")
const dirArg = new Argument('-d', '/usr/logs')
const loggingArg = new Argument('-l')

const stringListArg  = new Argument('-g', ["this", "is", "a", "List"]);
const numberListArg = new Argument('-i', [1,2,-3,5]);

const schema = new Schema([port, logging, dir, stringList, integerList],[portArg, dirArg, loggingArg,stringListArg, numberListArg
]);
/*
console.log(schema.isValid(portArg));
console.log(schema.isValid(loggingArg));
console.log(schema.isValid(dirArg));
console.log(schema.isValid(stringListArg));
console.log(schema.isValid(numberListArg));
*/
// console.log(schema.isValid(loggingArg));
console.log(schema.isValid());
/*
const Argument = require('./Argument')
const Schema   = require('./Schema')
function defineSchema(){
    bashLine = "-l -p 8080 -d /usr/logs";
    return bashLine.split(" ");
}
*/
//import Argument from './Argument'
/*
program = new Program(parser)
flagLogging = new Flag("-l")
arguments[0] = new Argument(flagLogging)
*/
//arguments[0] = new Argument(new Flag("-p"), new Type("integer"))
/*
arguments[0] = new Argument("-l", "")
arguments[1] = new Argument("-p", "integer")
arguments[2] = new Argument("-d", "string")
schema = defineSchema();
*/
//parser.parse(arguments, schema)
/*
parser.doesItMatchSchema(arguments)
parser.get(flagLogging)
*/