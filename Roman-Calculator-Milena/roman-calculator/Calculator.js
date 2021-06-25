class RomanCalculator {
    
    toDecimalNumber(romanNumeral) {
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
/* Just enter characters or a valid character array */
    isCharacterValid(character){
        let regex = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
        if(regex.exec(character)!== null){
            return true;
        }
        else return false;  
    }

    romanToDecimal(numberRoman) {    
        var decimalNumber = 0, preview =0;
        for (var i = 0; i < numberRoman.length; i++) {
            if(this.isCharacterValid(numberRoman)){
                if(this.toDecimalNumber(numberRoman.charAt(i) <= preview )){
                    decimalNumber = decimalNumber + this.toDecimalNumber(numberRoman.charAt(i));
                    preview = this.toDecimalNumber(numberRoman.charAt(i));
                } 
                else{
                    decimalNumber = decimalNumber + this.toDecimalNumber(numberRoman.charAt(i)) - 2*preview;
                    preview = this.toDecimalNumber(numberRoman.charAt(i));
                }
            }
        }
        return decimalNumber;
    } 
  
       

    decimalToRoman(numberDecimal){ 
        if (numberDecimal > 3999){ 
            return false;
        } 
        const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
        const thousands = ["", "M", "MM", "MMM"];
      
        const m = Math.floor(numberDecimal / 1000);
        const cm = numberDecimal % 1000;
        const c = Math.floor(cm / 100);
        const xc = cm % 100;
        const x = Math.floor(xc / 10);
        const i = xc % 10;
      
        var roman = thousands[m] + hundreds[c] + tens[x] + units[i];
      
        return roman;
      }

      //operations of a basic calculator
      
    Sum(number1 , number2){
        return number1 + number2;
    }

    SumRomanNumbers(numberRoman1, numberRoman2){
        let result = this.Sum(this.romanToDecimal(numberRoman1), this.romanToDecimal(numberRoman2));
        return this.decimalToRoman(result);
    }

    Res(number1, number2){
        return number1 - number2
    }

    ResRomanNumbers(numberRoman1, numberRoman2){
        let result = this.Res(this.romanToDecimal(numberRoman1), this.romanToDecimal(numberRoman2));
        return this.decimalToRoman(result);
    }

    Multiplication(number1, number2){
        return number1 * number2
    }

    MultiplicationRomanNumbers(numberRoman1, numberRoman2){
        let result = this.Multiplication(this.romanToDecimal(numberRoman1), this.romanToDecimal(numberRoman2));
        return this.decimalToRoman(result);
    }

    Division(number1, number2){
        return number1 / number2
    }

    DivisionRomanNumbers(numberRoman1, numberRoman2){
        let result = this.Division(this.romanToDecimal(numberRoman1), this.romanToDecimal(numberRoman2));
        return this.decimalToRoman(result);
    }

}
export { RomanCalculator }