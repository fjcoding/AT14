class RomanCalculator {
    
    getNumberValue(romanNumeral = ''){

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

    isCharacterValid(character = ''){

        let regex = /([I]|[V]|[X]|[L]|[C]|[D]|[M])/;

        return (character.search(regex)>=0) ? true : false;
    }

    romanToDecimal(romanNumber = '') { 

        let decimal = 0;
        let getNumberValue;
        let previousValue = 0;

        for (let i = 0; i < romanNumber.length; i++) {

            getNumberValue = this.getNumberValue(romanNumber.charAt(i));

            decimal += (previousValue >= getNumberValue) 
                ? getNumberValue
                : getNumberValue - previousValue * 2;

            previousValue = getNumberValue;
        }
        return decimal;
    }

    sumNumbers(numberOne = 0, numberTwo = 0) {

        return numberOne + numberTwo;
    }

    sumRomanNumbers(romanNumberOne = '', romanNumberTwo = '') {

        let result = this.sumNumbers(this.romanToDecimal(romanNumberOne), this.romanToDecimal(romanNumberTwo));

        return this.decimalToRoman(result);
    }

    decimalToRoman(number = 0) {

        let remainder = number;
        let roman = '';

        let  romanValues = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; 
        let decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        for(let i = 0; i < romanValues.length; i++) {

            [roman , remainder] = this.addRomanNumber(remainder, decimalValues[i], romanValues[i], roman);
        }        

        return  roman;
    }

    addRomanNumber(n = 0, decimalnumber = 0, romanEquivalence = 0, romanNumber = 0) {

        let remainder = n;

        while(remainder >= decimalnumber){

            romanNumber += romanEquivalence;
            remainder -= decimalnumber;
        }
        return [romanNumber, remainder];
    }   
}

export { RomanCalculator }