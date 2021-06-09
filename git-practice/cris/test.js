import * as functions from "./functions.js";
 
  class Test {
    constructor() {
      functions.print("The sum of the two numbers is "+functions.sum(3,5));
      functions.print("The multiplication of the two numbers is "+functions.mul(3,5));
      functions.print("The division of the two numbers is "+functions.div(3,5));
    }
  }
  new Test;
