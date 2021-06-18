class FlagSchema {
    constructor(id, defaultValue, dataType, isRequired) {
        this.id = id;
        this.defaultValue = defaultValue;
        this.dataType = dataType;
        this.isRequired = isRequired;
    }
}

//podria aumentarle una parametro que indique si la presencia del valor es obligatoria o no. 
/*
const flagSchemaPort = new FlagSchema('-p', 0, 'number', true)
const flagSchemaLogging = new FlagSchema('-l', false, 'boolean', false)
const flagSchemaDir = new FlagSchema('-d', '', 'string', true)

console.log(flagSchemaPort.id);
console.log(flagSchemaPort.defaultValue);
console.log(flagSchemaPort.dataType);
console.log(flagSchemaPort.isRequired);
console.log(flagSchemaLogging.id);
console.log(flagSchemaLogging.defaultValue);
console.log(flagSchemaLogging.dataType);
console.log(flagSchemaLogging.isRequired);
console.log(flagSchemaDir.id);
console.log(flagSchemaDir.defaultValue);
console.log(flagSchemaDir.dataType);
console.log(flagSchemaDir.isRequired);
*/
export { FlagSchema }