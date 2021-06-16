class Type{
    constructor(str){
        this.str = str;
        this.type = "undefined";
        defineType();
    }
    defineType(){
        let defaultType = typeof(this.str);
        switch(defaultType){
            case "number":  
                this.type = defaultType; 
            break;
            case "boolean":   
                this.type = defaultType; 
            break;
            case "string":    
                this.type = defaultType; 
            break;
            case "object": 
                if(Array.isArray(this.str)){
                    let isNumber = true;
                    value.forEach(element=>{
                        if(isNaN(element)){
                            isNumber = false                    
                        }
                    });
                    if(isNumber) this.type = "numberArray";
                    this.type = "stringArray";
                }
            break;
            default: 
                this.type = "undefined";
            break;
        }
    }
    getType(){
        return this.type;
    }
}
