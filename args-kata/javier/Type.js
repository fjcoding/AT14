class Type{
    constructor(str, defaultType="undefined"){
        this.str = str;
        this.type = defaultType;
        this.parserType();
        this.defineType();
    }
    parserType(){
            switch(this.type)
            {
                case "number":  
                    this.str = parseInt(this.str);
                break;
                case "boolean":   
                    this.str = Boolean(this.str);
                break;
                case "string":    
                    this.str = this.str + "";
                break;            
                default:
                break;
            }
    }
    defineType(){
        let defaultType = typeof(this.str);
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
                if(Array.isArray(this.str)){
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

