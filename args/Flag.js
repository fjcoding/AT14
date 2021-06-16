class Flag{
    constructor(id, value=null){
        this.id = id;
        this.value = value;
    }

    getFlagId(){
        return this.id;
    }
    getFlagValue(){
        return this.value;
    }
    
}

const flagPort= new Flag('-p', 8080);
const flagLogging=new Flag('-l');
const flagDir= new Flag('d','/usr/logs');

const flagId= new Flag('-a');
const flagValue= new Flag('-d')

console.log(flagPort.id);
console.log(flagPort.value);
console.log(flagLogging.id);
console.log(flagLogging.value);
console.log(flagDir.id);
console.log(flagDir.value);

console.log(flagId.getFlagId());
console.log(flagValue.getFlagValue());

console.log('----------Args------------' + Object.getOwnPropertyNames(flagPort));
Object.getOwnPropertyNames(flagPort).forEach(
  function(val) {
    console.log(val + ' -> ' + flagPort[val]);
  }
);

export{Flag};