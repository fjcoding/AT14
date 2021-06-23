class RomanCalculator {
    
    toDecimalNumber(romanNumeral) {
        switch(romanNumeral){
            case 'I': return 1;
            case 'V': return 5;            
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

    romanToDecimal(romanNumber) {     
        var decimal = 0;
        var toDecimalNumber;
        var previousValue = 0;
        for (var i = 0; i < romanNumber.length; i++) {
            toDecimalNumber = this.toDecimalNumber(romanNumber.charAt(i));
            if(previousValue >= toDecimalNumber)
                decimal = decimal + toDecimalNumber;                
            else
                decimal = decimal + toDecimalNumber - previousValue * 2;
            previousValue = toDecimalNumber;
        }
        return decimal;
    }

    sumNumbers(number1, number2) {
        return number1 + number2;
    }

    sumRomanNumbers(romanNumber1, romanNumber2) {
        let resultado = this.sumNumbers(this.romanToDecimal(romanNumber1), this.romanToDecimal(romanNumber2));
        return this.decimalToRoman(resultado);
    }

    decimalToRoman(number) {
        let remainder = number;
        let roman = '';
        var  romanValues = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; 
        var decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        for(var i = 0; i < romanValues.length; i++) {
            [roman, remainder] = this.addRomanNumber(remainder, decimalValues[i], romanValues[i], roman);
        }        
        return  roman;
    }

    addRomanNumber(n, decimalnumber, romanEquivalence, romanNumber) {
        let remainder = n;
        while(remainder >= decimalnumber)
        {
            romanNumber = romanNumber + romanEquivalence;
            remainder = remainder - decimalnumber;
        }
        return [romanNumber, remainder];
    }   
    
}

export { RomanCalculator }