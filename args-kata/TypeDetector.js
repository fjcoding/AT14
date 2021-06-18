class TypeDetector {
    detectType(value) {
        if(value != null)
            return typeof(value)
        else 
            return null;
    }
}

//const type = new TypeDetector;
//console.log(type.detectType("8080"));

export { TypeDetector }