class ArgumentSchema {
    constructor(flag, defaultValue, dataType, isRequired) {
        this.flag = flag;
        this.defaultValue = defaultValue;
        this.dataType = dataType;
        this.isRequired = isRequired;
    }
}

export { ArgumentSchema }