class FlagSchema {

    constructor(id, defaultValue, dataType) {

        this.id = id;
        this.defaultValue = defaultValue;
        this.dataType = dataType;
    }
    
    //get and set the id

    getId(){

        return this.id;
    }
    setId(id){

        this.id = id;
    }

    //get and set the value

    getDefaultValue(){

        return this.defaultValue;
    }
    setDefaultValue(defaultValue){

        this.defaultValue = defaultValue;
    }

    //get and set the dataType

    getDataType(){

        return this.dataType;
    }
    setDataType(dataType){

        this.dataType = dataType;
    }

}

/*

console.log(flagSchemaPort.id);
console.log(flagSchemaPort.defaultValue);
console.log(flagSchemaPort.dataType);
console.log(flagSchemaLogging.id);
console.log(flagSchemaLogging.defaultValue);
console.log(flagSchemaLogging.dataType);
console.log(flagSchemaDir.id);
console.log(flagSchemaDir.defaultValue);
console.log(flagSchemaDir.dataType);
*/
export { FlagSchema }