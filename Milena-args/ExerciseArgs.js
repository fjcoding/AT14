class Flag {
  constructor(name, type, value = "", ) {
    this.name = name;
    this.value = value;
    this.type = type;
  }

  isCorrectFlag(){
      var regex = /[A-z]/;
      if(this.name.charAt(0) == '-' && regex.test(this.name.charAt(1))){
        return true;
      }
      else return "Im not a flag"
  }

  whatTypeIs(){
    let temp = typeof(this.value);
    return temp;
         }
  
  verifyType(){
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

class Schema{
  constructor(numberOfFlags,  flagsList ){
    this.numberOfFlags = numberOfFlags;
    this.flagsList = flagsList;
}  

checkFlags(){
  this.flagList.forEach(element => element.isCorrectFlag());
}
  }
  

console.log('Hello, world!')
let myflag = new Flag("-a", true );
console.log(myflag.isCorrectFlag())
console.log(myflag.whatTypeIs())

let flag1 = new Flag("-l", "boolean", true);
let flag2 = new Flag("-l", "string", "asd");
let flag3 = new Flag("-l", "Number", 8080);

let list = new Array<Flag>[flag1, flag2, flag3];

let schematest = new Schema(3, list);