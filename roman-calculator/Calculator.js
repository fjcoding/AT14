class RomanCalculator {
    toDecimalNumber(romanNumeral) {
        if (romanNumeral === 'V') {
            return 5
        } else {
            return 1
        }
        switch(romanNumeral){
            case 'V': return 5;
            case 'I': return 1;
            
        }
    }
}

export { RomanCalculator }