const listOfRomanNumber = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const listOfLimits = {
  I: 3,
  V: 1,
  X: 3,
  L: 1,
  C: 3,
  D: 1,
  M: 9
};

class RomanCalculator {
  toDecimal = (numeroRomano) => listOfRomanNumber[numeroRomano];
  toPutIntoStrings = (firstRomanNumber, secondRomanNumber) => {
    //hacer que sea un numero mayor revisar
    const togetherNumbers = [];
    const stringFirstNumber = firstRomanNumber;
    const splitedFisrt = stringFirstNumber.split("");
    const stringSecondNumber = secondRomanNumber;
    const splitedSecond = stringSecondNumber.split("");
    togetherNumbers.push(splitedFisrt, splitedSecond);
    return togetherNumbers;
  };
  verifyString = (string) => {
    const listOfValidation = [];
    const listKeys = Object.keys(listOfRomanNumber);
    const stringTogether = string;
    stringTogether.forEach((string) => {
      const verifiString = string.every((ai) => listKeys.includes(ai));
      listOfValidation.push(verifiString);
    });
    const validate = listOfValidation.includes(false);
    if (validate === true) {
      return false;
    } else {
      return true;
    }
  };

  getValue = (romanNumber) => {
    let totalValue = 0;
    const romanNum = romanNumber;
    const romanNumSplited = romanNum.split("");
    romanNumSplited.forEach((num, index, array) => {
      const firstNumber = this.toDecimal(num);
      const secondNumber = this.toDecimal(array[index + 1]);
      if (firstNumber < secondNumber) {
        totalValue -= firstNumber;
      } else {
        totalValue += firstNumber;
      }
    });
    return totalValue;
  };

  concatenate = (
    firstRomanNumberToConcatenate,
    secondRomanNumbertoConcatenate
  ) => {
    const firstNumberTo = firstRomanNumberToConcatenate;
    const secondNumberTo = secondRomanNumbertoConcatenate;
    const firstDecimalNum = this.getValue(firstNumberTo);
    const secondDecimalNum = this.getValue(secondNumberTo);
    if (firstDecimalNum > secondDecimalNum) {
      const concatenate = firstNumberTo.concat(secondNumberTo);
      return concatenate;
    } else {
      const concatenate = secondNumberTo.concat(firstNumberTo);
      return concatenate;
    }
  };

  limiting = (romanNumber) => {
    let contadorSeguidos = 0;
    const romNumber = romanNumber;
    const romNumberSplit = romNumber.split("");
    romNumberSplit.forEach((character, index, array) => {
      const lengthRomNumberSplit = array.length;
      if (
        character === array[index + 1] ||
        array[lengthRomNumberSplit - 2] === array[lengthRomNumberSplit - 3]
      ) {
        contadorSeguidos += 1;
      } else {
        contadorSeguidos = 0;
      }
      console.log(contadorSeguidos);
      const checking = listOfLimits[character];
      ///if (arr[lengthRomNumberSplit - 2] === arr[lengthRomNumberSplit - 3])

      if (contadorSeguidos > checking) {
        return false;
      } else {
        contadorSeguidos = 0;
      }
    });
    return true;
  };
}

const p = new RomanCalculator();
const strings = p.toPutIntoStrings("CCC", "II");
const g = p.limiting("CCCC");
console.log(g);

export { RomanCalculator };
