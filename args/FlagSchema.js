class FlagSchema{
    constructor(id, defaultValue, dataType){
        this.id = id;
        this.defaultValue = defaultValue;
        this.dataType = dataType;
    }

    getFlagSchemaId(){
        return this.id;
    }
    getFlagSchemaDef(){
        return this.defaultValue;
    }
    getFlgSchemaDataType(){
        return this.dataType;
    }

}

const flagSchemaPort= new FlagSchema('-p', 0,'number');
const flagSchemaLogging =new FlagSchema('-l', false, 'boolean');
const flagSchemaDir= new FlagSchema('-d','','string');

const flagSchemaId= new FlagSchema('-a', 0, 'number');
const flagSchemaDef= new FlagSchema('-l', false, 'boolean');
const flagSchemaDataType= new FlagSchema('-d','','string');

console.log(flagSchemaPort.id);
console.log(flagSchemaPort.defaultValue);
console.log(flagSchemaPort.dataType);
console.log(flagSchemaLogging.id);
console.log(flagSchemaLogging.defaultValue);
console.log(flagSchemaLogging.dataType);
console.log(flagSchemaDir.id);
console.log(flagSchemaDir.defaultValue);
console.log(flagSchemaDir.dataType);

console.log(flagSchemaId.getFlagSchemaId());
console.log(flagSchemaDef.getFlagSchemaDef());
console.log(flagSchemaDataType.getFlgSchemaDataType());

console.log('-- Schema --' + Object.getOwnPropertyNames(flagSchemaPort));
Object.getOwnPropertyNames(flagSchemaPort).forEach(
  function(val) {
    console.log(val + ' -> ' + flagSchemaPort[val]);
  }
);


export{FlagSchema};