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

  getLimits = (romanCharacter) => listOfLimits[romanCharacter];

  limiting = (romanNumber) => {
    let islimited = false;
    const romanNumberList = romanNumber;
    const listromanNumberList = romanNumberList.split("");

    listromanNumberList.forEach((element) => {
      const countingElement = listromanNumberList.filter(
        (x) => x === element
      ).length;
      const limitOfElement = this.getLimits(element);
      if (countingElement > limitOfElement) {
        islimited = true;
      }
    });
    return islimited;
  };
}

const p = new RomanCalculator();
//const strings = p.toPutIntoStrings("CCC", "II");
const g = p.limiting("CCCC");
console.log(g);

export { RomanCalculator };
