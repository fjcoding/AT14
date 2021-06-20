class ArgumentSchema {
    constructor(flag, defaultValue, dataType, isRequired) {
        this.flag = flag;
        this.defaultValue = defaultValue;
        this.dataType = dataType;
        this.isRequired = isRequired;
    }
}

/*
const flagSchemaPort = new ArgumentSchema('-p', 0, 'number', true)
const flagSchemaLogging = new ArgumentSchema('-l', false, 'boolean', false)
const flagSchemaDir = new ArgumentSchema('-d', '', 'string', true)

console.log(flagSchemaPort.flag);
console.log(flagSchemaPort.defaultValue);
console.log(flagSchemaPort.dataType);
console.log(flagSchemaPort.isRequired);
console.log(flagSchemaLogging.flag);
console.log(flagSchemaLogging.defaultValue);
console.log(flagSchemaLogging.dataType);
console.log(flagSchemaLogging.isRequired);
console.log(flagSchemaDir.flag);
console.log(flagSchemaDir.defaultValue);
console.log(flagSchemaDir.dataType);
console.log(flagSchemaDir.isRequired);  */
export { ArgumentSchema }