class TypeDetector {
    detectType(value) {
        if(value != null)
            return typeof(value)
        else 
            return null;
    }   
}

export { TypeDetector }


