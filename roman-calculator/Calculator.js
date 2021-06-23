class RomanCalculator {

    constructor(){

    }
    
    toDecimalNumber(romanNumeral) {
        romanNumeral     = Array.from(romanNumeral); 
        let decimalValue = 0;
        let lastValue    = this.getDecimalNumberValue(romanNumeral[0]);
        let currentValue = 0;
        romanNumeral.forEach(element => {
            currentValue = this.getDecimalNumberValue(element);
            if(lastValue >= currentValue)
            {
                decimalValue = decimalValue + currentValue;
            }
            else
            {
                decimalValue = decimalValue - lastValue + (currentValue - lastValue);
            }    
            lastValue = currentValue;
        });
        return decimalValue;
    }

    toRomanNumber(numeral){
        let todecimal  = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
        let toroman    = ["M","CM","D","CD","C","XC","L","XL", "X","IX","V","IV","I"];
        let romanValue = '';
        let i = 0;
        while(numeral>0){
            if(numeral>=todecimal[i]){
                romanValue = romanValue + toroman[i];
                numeral = numeral - todecimal[i];                       
            }
            else
                i++;
        }
        return romanValue;
    }

    
    getDecimalNumberValue(romanNumeral){
        switch(romanNumeral){
            case 'I': return 1;            
            //case 'IV': return 4;
            case 'V': return 5;
            //case 'IX': return 9;
            case 'X': return 10;
            //case 'XL': return 40;
            case 'L': return 50;
            //case 'XC': return 90;
            case 'C': return 100;
            //case 'CD': return 400;
            case 'D': return 500;
            //case 'CM': return 900;            
            case 'M': return 1000;  
            default: 
            break;
        }
    }

    isCharacterValid(character){
        let regex = /([I]|[V]|[X]|[L]|[C]|[D]|[M])/;
        if(character.search(regex)>=0)
            return true;
        return false;    
    }
}

export { RomanCalculator }