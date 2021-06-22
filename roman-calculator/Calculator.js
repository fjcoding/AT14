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
}

export { RomanCalculator }