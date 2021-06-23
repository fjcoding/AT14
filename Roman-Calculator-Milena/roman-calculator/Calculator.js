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

    WhenToAddInTheCharacterArray(character){
        return true;
    }

    WhenToSubtracInTheCharacterArray(character){
        return false;
    }

}

export { RomanCalculator }