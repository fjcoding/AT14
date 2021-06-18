class Schema
{
    constructor(id,expectedValue=null,typeValue)
    {
        this.id = id;
        this.expectedValue = expectedValue;
        this.typeValue = typeValue;
    }
}

/*const schemaL = new Schema('-l',false,'boolean');
const schemaP = new Schema('-p',0,'number');
const schemaD = new Schema('-d','1','string');

console.log(schemaL.id);
console.log(schemaL.expectedValue);
console.log(schemaL.typeValue);

console.log(schemaP.id);
console.log(schemaP.expectedValue);
console.log(schemaP.typeValue);

console.log(schemaD.id);
console.log(schemaD.expectedValue);
console.log(schemaD.typeValue);*/

export{ Schema };