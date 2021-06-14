class TypeDetector {
    detectType(value) {
        return typeof(value)
    }
}

const detector = new TypeDetector();
console.log(detector.detectType(0));
console.log(detector.detectType(1.5));
console.log(detector.detectType(false));
console.log(detector.detectType('test'));