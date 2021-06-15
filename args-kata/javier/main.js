import { Argument } from './Argument.js'
import { FlagSchema } from './FlagSchema.js'
import { TypeDetector } from './TypeDetector.js'

class Schema {
    constructor(flagSchemas) {
        this.flagSchemas = flagSchemas;
        this.detector = new TypeDetector;
    }

    isValid(argument) {
        let isValid = false;
        this.flagSchemas.forEach(flagSchema => {
            if (argument.flagId === flagSchema.id) {
                if(argument.Value === null) argument.setValue(flagSchema.defaultValue)                
                const flagType = this.detector.detectType(argument.Value);
                console.log(flagType);
                isValid = flagSchema.dataType === flagType;
            }
        });
        return isValid;
    }
}

const port = new FlagSchema('-p', 0, 'number')
const logging = new FlagSchema('-l', false, 'boolean')
const dir = new FlagSchema('-d', '', 'string')
const stringList  = new FlagSchema('-g', null, 'stringArray')
const integerList = new FlagSchema('-i', '', 'numberArray')
//const integerList = new FlagSchema('-d', '', 'numberArray')

const schema = new Schema([port, logging, dir, stringList, integerList])

const portArg = new Argument('-p', 8080)
const loggingArg = new Argument('-l')
const dirArg = new Argument('-d', '/usr/logs')
const stringListArg  = new Argument('-g', ["this", "is", "a", "List"]);
const integerListArg = new Argument('-i', [1,2,-3,5]);

console.log(schema.isValid(portArg));
console.log(schema.isValid(loggingArg));
console.log(schema.isValid(dirArg));
console.log(schema.isValid(stringListArg));
console.log(schema.isValid(integerListArg));

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