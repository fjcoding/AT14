class Type{
    constructor(str, defaultType="undefined"){
        this.str = str;
        this.type = defaultType;
        this.parserType();
        // this.defineType();
    }
    parserType(){
            if(this.type === "undefined")
                this.type = typeof(this.str);
            switch(this.type)
            {
                case "number":  
                    this.str = parseInt(this.str);
                    if(isNaN(this.str))
                        this.type = "undefined"
                break;
                case "boolean":   
                    this.str = this.str  + "";
                    if(this.str.toLowerCase().trim() === "true" )
                        this.type = "boolean";
                    else if(this.str.toLowerCase().trim() === "false" )
                        this.type = "boolean";
                    else    
                        this.type = "undefined"
                break;
                case "string":    
                    this.str = this.str + "";
                    if(typeof(this.str)==="string" && isNaN(this.str))
                        this.type = "string";
                    else   
                        this.type = "undefined" 
                break;            
                default:
                    this.type = "undefined" 
                break;
            }
    }
    defineType(){
        // let defaultType = typeof(this.str);
        // console.log(defaultType);
        let defaultType = this.type;
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

