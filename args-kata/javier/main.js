const Argument = require('./Argument')
const Schema   = require('./Schema')
function defineSchema(){
    bashLine = "-l -p 8080 -d /usr/logs";
    return bashLine.split(" ");
}
//import Argument from './Argument'
/*
program = new Program(parser)
flagLogging = new Flag("-l")
arguments[0] = new Argument(flagLogging)
*/
//arguments[0] = new Argument(new Flag("-p"), new Type("integer"))
arguments[0] = new Argument("-l", "")
arguments[1] = new Argument("-p", "integer")
arguments[2] = new Argument("-d", "string")
schema = defineSchema();
//parser.parse(arguments, schema)
/*
parser.doesItMatchSchema(arguments)
parser.get(flagLogging)
*/