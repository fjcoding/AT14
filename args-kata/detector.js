const operator = {
  number: (value) => !isNaN(value),
  string: (value) => {
    if (typeof value === "string") {
      return true;
    } else {
      return false;
    }
  },
  boolean: (value) => {
    let validValues = ["true", "false"];
    if (validValues.includes(value)) {
      return true;
    } else {
      return false;
    }
  }
};
export class Detect {
  finalDetector = (expectedType, value) => {
    return operator[expectedType](value);
  };
}
