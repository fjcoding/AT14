import { Argument } from './Argument.js'
import { ArgumentSchema } from './ArgumentSchema.js'
import { TypeDetector } from './TypeDetector.js'
import { Schema } from './Schema.js'

class Parser{
    constructor(argumentSchemas) {
        this.argumentSchemas = argumentSchemas; 
        this.argumentlist = [];       
    }

    isFlag(str){
        var strLenght; 
        if(str != null) {
            strLenght = str.length;
            return (str.charAt(0) === "-" && strLenght === 2 && this.isLetter(str.charAt(1)));
        }            
        else 
            return false;
    }   

    isLetter = (caracter) => {
        let ascii = caracter.toUpperCase().charCodeAt(0);
        return ascii > 64 && ascii < 91;
    };
        
    obtainArguments(string) {
        let arrayArgs = string.split(" ");
        arrayArgs.push(null);
        for (let i = 0; i < arrayArgs.length - 1; i++) {
            if(this.isFlag(arrayArgs[i])){ 
                if(this.isFlag(arrayArgs[i + 1]) == false)
                    var argument = new Argument(arrayArgs[i], this.detectValue(arrayArgs[i + 1]));
                else 
                    var argument = new Argument(arrayArgs[i]);
                this.argumentlist.push(argument);
            }    
        }       
        return this.argumentlist;
    }

    areArgumentValids(argumentlist, argumentSchemas) {
        var schema = new Schema(argumentSchemas);
        let errorsCounter = 0;
        argumentlist.forEach(argument => {
            if(!schema.isArgumentValid(argument))
                errorsCounter++;
        });
        return errorsCounter;
    }

    parseador(stringParameters) {
        var errores = this.areArgumentValids(this.obtainArguments(stringParameters), this.argumentSchemas);
        if(errores === 0) {            
            this.completeDefaultValues();
            this.completeMissingArguments();  
            console.log(this.parseCommandLine());          
        }
        else{
                console.log("Error with the arguments...");
            } 
    } 

    completeMissingArguments() {
        this.argumentSchemas.forEach(argumentSchema => {
            if(!this.existFlag(argumentSchema)) {
                var argument = new Argument(argumentSchema.id, argumentSchema.defaultValue);
                this.argumentlist.push(argument);
            }                
        });
    }

    completeDefaultValues() {
        this.argumentlist.forEach(argument => {
            if(argument.value === null) {
                argument.value = this.returnDefaultValue(argument.flag);
            }                
        });
    }

    returnDefaultValue(flag) {
        var value;
        this.argumentSchemas.forEach(argumentSchema => {
            if(fl === argumentSchema.flag) 
                value = argumentSchema.defaultValue;                        
        });
        return value;
    }

    existFlag(argumentSchema) {
        let exist = false;
        this.argumentlist.forEach(argument => {
            if (argument.flag === argumentSchema.flag) {
                exist = true;
            }
        });
        return exist;
    }

    detectValue(str) {
        var value;
        try {
            value = eval(str);
        } catch (error) {
            value = str;
        }
        return value;
    }

    parseCommandLine() {
        var commandLine = '';
        this.argumentlist.forEach(argument => {
            commandLine = commandLine + argument.flag + ' ' + argument.value + ' ';
        });
        return commandLine.trim();
    }

}

const port = new ArgumentSchema('-p', 0, 'number', true)
const logging = new ArgumentSchema('-l', false, 'boolean', false)
const dir = new ArgumentSchema('-d', '', 'string', true)

const parser = new Parser([port, logging, dir]);
//console.log(parser.strArgs)
//console.log(parser.argumentSchemas)

//console.log(parser.areargumentsValids(parser.obtainarguments("-l -p 8080 -d /usr/logs")));

//console.log(parser.areargumentsValids(parser.obtainarguments("-l -p 8080 -d /usr/logs"), [port, logging, dir]));
//console.log(parser.areargumentsValids(parser.obtainarguments("-l 6080 -p fgfgdfg -d /usr/logs"), [port, logging, dir]));
parser.parseador("-l false -d /usr/logs -p 8080 -k",)
//console.log(parser.detectValue('-123546'));
//console.log(parser.isLetter('l'));
//console.log(parser.obtainArguments("-l -p 8080 -d /usr/logs"));


/*const parser = new Parser("-l 6080 -p fgfgdfg -d /usr/logs", []);

console.log(parser.obtainarguments("-l 6080 -p fgfgdfg -d /usr/logs"))
console.log(" ")
console.log(parser.obtainarguments("-l -p -d"))
console.log(" ")
console.log(parser.obtainarguments("-l 6080 -p fgfgdfg -d"))
console.log(" ")
console.log(parser.obtainarguments("-l 6080 -p fgfgdfg -d /usr/logs")) */
export { Parser }



