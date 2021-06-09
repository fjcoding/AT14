import * as functions from "./functions.js";
 
  class Test {
    constructor() {
      functions.print("The sum of the two numbers is "+functions.sum(3,5));
    }
  }
  new Test;
