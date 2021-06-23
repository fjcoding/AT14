class RomanCalculator {
    
    toDecimalNumber(romanNumeral) {
        romanNumeral     = Array.from(romanNumeral); 
        let value        = 0;
        let lastValue    = this.getNumberValue(romanNumeral[0]);
        let currentValue = 0;
        romanNumeral.forEach(element => {
            currentValue = this.getNumberValue(element);
            if(lastValue >= currentValue)
            {
                value = value + currentValue;
            }
            else
            {
                value = value - lastValue + (currentValue - lastValue);
            }    
            lastValue = currentValue;
        });
        return value;
    }

    getNumberValue(romanNumeral){
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