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

    isCharacterValid(character){
        let regex = /([I]|[V]|[X]|[L]|[C]|[D]|[M])/;
        if(character.search(regex)>=0)
            return true;
        return false;    
    }

    twoRoman(roman){
        let num=0;
        
        for (let i = 0; i < roman.length; i++){
            num+= this.toDecimalNumber(roman.charAt(i));            
        }
        return num;

    }

    isLess(roman){
        
        let less=0;
        let i=0;
        if(this.toDecimalNumber(roman.charAt(i))<this.toDecimalNumber(roman.charAt(i+1))){
            less= this.toDecimalNumber(roman.charAt(i+1))-this.toDecimalNumber(roman.charAt(i));
        }
        
        return less;
    }

    sumRomanNumeral(romanOne, romanTwo){
        let result=0;
        result=this.convertRomanToDecimal(romanOne)+this.convertRomanToDecimal(romanTwo);

        return result;
    }

    convertRomanToDecimal(roman){
        var decimalVal= 'IVXLCDM';
        var romanVal=[1,5,10,50,100,500,1000];
         let sum=0;
         let last='';
         let count= 1;
        
         for (let i = 0; i < roman.length; i++) {
             let value= romanVal[decimalVal.indexOf(roman[i])];
             if(roman[i]==last){
                 count++;
             }else if(romanVal[decimalVal.indexOf(roman[i-1])]<value){
                 value= -2*romanVal[decimalVal.indexOf(roman[i-1])]+value;
             }else{
                 count=1;
             }
             last= roman[i];
             sum=sum+value; 
         }
         return(sum);
    }

    convertDecimalToRoman(decimal){
        var roman = '';
        var romanValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

        for (let i = 0; i < romanValue.length; i++) {
            while (decimal >= decimalValue[i]) {
              roman += romanValue[i];
              decimal -= decimalValue[i];
            }
        }
          return roman;
     }
    
      
    
}


export { RomanCalculator }