class TypeDetector {
    detectType(value) {
        //console.log(value);
        if(Array.isArray(value)){
            let isNumber = true;
            value.forEach(element=>{
                if(isNaN(element))
                    isNumber = false                    
            });
            if(isNumber) return "numberArray";
            else  return "stringArray";
        }
        return typeof(value)
    }
}
/*
const detector = new TypeDetector();
console.log(detector.detectType(0));
console.log(detector.detectType(1.5));
console.log(detector.detectType(false));
console.log(detector.detectType('test'));
console.log(detector.detectType(new Array()));
*/
export { TypeDetector }
