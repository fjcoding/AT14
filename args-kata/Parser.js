import { CompleteArgument } from './CompleteArgument.js'
import { ObtainArgument } from './ObtainArgument.js'
import { Argument } from './Argument.js'
import { ArgumentSchema } from './ArgumentSchema.js'
import { TypeDetector } from './TypeDetector.js'
import { Schema } from './Schema.js'

class Parser{
    constructor(argumentSchemas) {
        this.argumentSchemas = argumentSchemas; 
        this.argumentList = [];       
        this.errorMessages = [];
    }

    areArgumentValids(argumentList, argumentSchemas) {
        var schema = new Schema(argumentSchemas);
        let errorsCounter = 0;
        argumentList.forEach(argument => {
            if(!schema.isArgumentValid(argument))
                errorsCounter++;
        });
        this.errorMessages = schema.errorMessages;
        return errorsCounter;
    }

    parseador(stringParameters) {
        var obtainArguments = new ObtainArgument();
        this.argumentList = obtainArguments.obtainArguments(stringParameters);
        var errores = this.areArgumentValids(this.argumentList, this.argumentSchemas);
        if(errores === 0) {   
            var compliteArguments = new CompleteArgument(this.argumentList, this.argumentSchemas);
            this.argumentList = compliteArguments.completeDefaultValues();    
            this.argumentList = compliteArguments.completeMissingArguments();
            return this.parseCommandLine();          
        }
        else{
                /*var messages = "";
                this.errorMessages.forEach(message => {
                    messages = messages + "" + message + "\n"
                });
                return messages + "Error with the arguments..."; */
                return this.errorMessages;
            } 
    }        
   
    parseCommandLine() {
        var commandLine = '';
        this.argumentList.forEach(argument => {
            commandLine = commandLine + argument.flag + ' ' + argument.value + ' ';
        });
        return commandLine.trim();
    }

}

const port = new ArgumentSchema('-p', 0, 'number', true)
const logging = new ArgumentSchema('-l', false, 'boolean', false)
const dir = new ArgumentSchema('-d', '', 'string', true)
const parser = new Parser([port, logging, dir]);

console.log(parser.parseador("-l -p abcd -d -k"));

export { Parser }



