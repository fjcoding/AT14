class DefaultValue{
    constructor(id, value){
        this.id =id;
        this.value=value;
    }
}

const defaultValue1= new DefaultValue('-p', 0);
const defaultValue2= new DefaultValue('-l', false);
const defaultValue3= new DefaultValue('-d', "");

console.log(defaultValue1.id);
console.log(defaultValue1.value);
console.log(defaultValue2.id);
console.log(defaultValue2.value);
console.log(defaultValue3.id);
console.log(defaultValue3.value);



export{DefaultValue};