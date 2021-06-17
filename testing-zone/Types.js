class Types{
    
    constructor(value){
        this.value = value;
        this.type = "undefined";
        this.defineType();
    }
    defineType(){
       
        //console.log(defaultType);
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
                if(Array.isArray(this.value)){
                    let isNumber = true;
                    this.str.forEach(element=>{
                        if(isNaN(element)){
                            isNumber = false                    
                        }
                    });
                    if(isNumber) this.type = "numberArray";
                    else this.type = "stringArray";
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

export {Type};