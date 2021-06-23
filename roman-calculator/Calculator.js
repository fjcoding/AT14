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
        let regex = /([I]|[V]|[X]|[L]|[C]|[D]|[M])/g;
        if(character.search(regex)>=0)
            return true;
        return false;    
    }

    concatenateNumbers(romanNumber1,romanNumber2)
    {
        let concatenatedRoman = romanNumber1+romanNumber2;
        return concatenatedRoman;
    }

    lessThanThreeI(rumanNumber)
    {
        let regex1 = /[I]{1,3}/g;
        if(rumanNumber.match(regex1)==null)
        {
            return true;
        }
        else{
            if(rumanNumber.match(regex1).length > 1 )
                {return false;}
            else{return true;}
        }

    }

    lessThanThreeX(rumanNumber)
    {
        let regex1 = /[X]{1,3}/g;
        if(rumanNumber.match(regex1)==null)
        {
            return true;
        }
        else{
            if(rumanNumber.match(regex1).length > 1 )
                {return false;}
            else{return true;}
        }

    }

    lessThanThreeC(rumanNumber)
    {
        let regex1 = /[C]{1,3}/g;
        if(rumanNumber.match(regex1)==null)
        {
            return true;
        }
        else{
            if(rumanNumber.match(regex1).length > 1 )
                {return false;}
            else{return true;}
        }


    }

    lessThanOneV(rumanNumber)
    {
        let regex1 = /[V]{1}/g;
        if(rumanNumber.match(regex1)==null)
        {
            return true;
        }
        else{
            if(rumanNumber.match(regex1).length > 1 )
                {return false;}
            else{return true;}
        }


    }

    lessThanOneL(rumanNumber)
    {
        let regex1 = /[L]{1}/g;
        if(rumanNumber.match(regex1)==null)
        {
            return true;
        }
        else{
            if(rumanNumber.match(regex1).length > 1 )
                {return false;}
            else{return true;}
        }


    }

    lessThanOneD(rumanNumber)
    {
        let regex1 = /[D]{1}/g;
        if(rumanNumber.match(regex1)==null)
        {
            return true;
        }
        else{
            if(rumanNumber.match(regex1).length > 1 )
                {return false;}
            else{return true;}
        }

    }

    toSubtractedNumber(romanNumeral) {

        switch(romanNumeral){
            case 'IV': return 4;
            case 'IX': return 9;
            case 'XL': return 40;
            case 'XC': return 90;
            case 'CD': return 400;
            case 'CM': return 900;
        }
    }
//MMLV
    romanToDecimal(romanNumber)
    {
        const roman = new RomanCalculator;
        let digital=0;
        let digitalNumber = 0;
        let value;
        let lessValue;

        for(let i = 0; i<=romanNumber.length-1; i++)
        {
            value = romanNumber.charAt(i);
            switch(value)
            {
                case "I":
                    if(value == "I" && (romanNumber.charAt(i+1)=="V" || romanNumber.charAt(i+1)=="X"))
                    {
                        lessValue = value + romanNumber.charAt(i+1);
                        digital = roman.toSubtractedNumber(lessValue);
                        i++;
                    }
                    else
                    {
                        digital = roman.toDecimalNumber(value)
                    }
                    break;
                case "X":
                    if(value == "X" && (romanNumber.charAt(i+1)=="L" || romanNumber.charAt(i+1)=="C"))
                    {
                        lessValue = value + romanNumber.charAt(i+1);
                        digital = roman.toSubtractedNumber(lessValue);
                        i++;
                    }
                    else
                    {
                        digital = roman.toDecimalNumber(value)
                    }
                    break;
                case "C":
                    if(value == "C" && (romanNumber.charAt(i+1)=="D" || romanNumber.charAt(i+1)=="M"))
                    {
                        lessValue = value + romanNumber.charAt(i+1);
                        digital = roman.toSubtractedNumber(lessValue);
                        i++;
                    }
                    else
                    {
                        digital = roman.toDecimalNumber(value)
                    }
                    break;
                default:
                    digital = roman.toDecimalNumber(value)
                    break;

            }

            digitalNumber = digitalNumber + digital;
        }
        //console.log(digitalNumber)
        return digitalNumber;
    }

}

export { RomanCalculator }