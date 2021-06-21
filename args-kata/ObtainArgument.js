import { Argument } from './Argument.js'

class ObtainArgument{
    constructor() {
        this.argumentList = [];
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

    isLetter(caracter) {
        let ascii = caracter.toUpperCase().charCodeAt(0);
        return ascii > 64 && ascii < 91;
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
        
    obtainArguments(string) {
        let arrayArgs = string.split(" ");
        arrayArgs.push(null);
        for (let i = 0; i < arrayArgs.length - 1; i++) {
            if(this.isFlag(arrayArgs[i])){ 
                if(this.isFlag(arrayArgs[i + 1]) == false)
                    var argument = new Argument(arrayArgs[i], this.detectValue(arrayArgs[i + 1]));
                else 
                    var argument = new Argument(arrayArgs[i]);
                this.argumentList.push(argument);
            }    
        }       
        return this.argumentList;
    }

}

export { ObtainArgument }