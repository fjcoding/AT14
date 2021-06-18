class Flag {
  constructor(name, type, value = "", ) {
    this.name = name;
    this.value = value;
    this.type = type;
  }

  isCorrectFlag() {
      var regex = /[A-z]/;
      if(this.name.charAt(0) == '-' && regex.test(this.name.charAt(1))){
        return true;
      }
      else return "Im not a flag"
  }

  whatTypeIs() {
    let temp = typeof(this.value);
    return temp;
  }

  verifyType() {
    switch(type) {
      case "boolean": 
            if(value == ""){
              value = true;
              return true;
            }
            else
              return false;
        break;
          case "Number":
            if( value == "")
            {
              value = 0;
            }
            
      
        break;
          case "Number":
        breack;
      default:
        // code block
    }
  }
}

class Schema {
  constructor(numberOfFlags,  flagsList ){
    this.numberOfFlags = numberOfFlags;
    this.flagsList = flagsList;
  }

  checkFlags() {
    this.flagList.forEach(element => element.isCorrectFlag());
  }
}

export { Flag, Schema }