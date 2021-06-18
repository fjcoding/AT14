const schema = new Array();

class Flag {
  
  constructor(name, value) {
    this.name = name;
    this.value = value;
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
    /*switch (this.value) {
    
        case Boolean:
            if(typeof(this.value)== true || typeof(this.value)== false){
                return;
            }
            break;
        case String:
            if(typeof(this.value)== ""){
                return;
            }
            break;
        case Integer:
            if(typeof(this.value).charAt(0) == [0-9] ){
                return;
            }
            break;
        default:
          return 'This type of value is wrong ' + this.value + '.';
        */
         }
}

//console.log('Hello, world!')
//let myflag = new Flag("-a", "-abc");
//console.log(myflag.isCorrectFlag())

//console.log(myflag.whatTypeIs())