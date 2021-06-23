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
        result=this.toDecimalNumber(romanOne)+this.toDecimalNumber(romanTwo);

        return result;
    }

    convertRomanToDecimal(roman){
        var decimalVal= 'IVXLC';
        var romanVal=[1,5,10,50,100];
         let sum=0;
         let last='';
         let c= 1;
        
         for (let i = 0; i < roman.length; i++) {
             let val= romanVal[decimalVal.indexOf(roman[i])];
             if(roman[i]==last){
                 c++;
             }else if(romanVal[decimalVal.indexOf(roman[i-1])]<val){
                if(c==3){
                  //  'error 3 seguidos antes de un mayor')
                    break;
                }
                val= -2*romanVal[decimalVal.indexOf(roman[i-1])]+val;
             }else{
                 c=1;
             }
             if(c==4){
                // 'error 4 seguidos')
                 break;
             }
             last= roman[i];
             sum=sum+val;
             
             
         }
         return(sum);
    }

       
    
}


export { RomanCalculator }