class FlagSchema {

    constructor(id, defaultValue, dataType) {

        this.id = id;
        this.defaultValue = defaultValue;
        this.dataType = dataType;
    }

    //Function Section
    
    //Get and Set section

    getId(){

        return this.id;
    }
    setId(id){

        this.id = id;
    }

    getDefaultValue(){

        return this.defaultValue;
    }
    setDefaultValue(defaultValue){

        this.defaultValue = defaultValue;
    }

    getDataType(){

        return this.dataType;
    }
    setDataType(dataType){

        this.dataType = dataType;
    }

}

/*
const flagSchemaPort = new FlagSchema('-p', 0, 'number')
const flagSchemaLogging = new FlagSchema('-l', false, 'boolean')
const flagSchemaDir = new FlagSchema('-d', '', 'string')

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