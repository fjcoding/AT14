class RomanCalculator {
    
    toDecimalNumber(romanNumeral) {
        /*if (romanNumeral === 'V') {
            return 5
        } else {
            return 1
        }*/
        switch(romanNumeral){
            case 'V': return 5;
            case 'I': return 1;
            case 'X': return 10;
            case 'L': return 50;
            case 'D': return 500;
            case 'C': return 100;
            case 'M': return 1000;  
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