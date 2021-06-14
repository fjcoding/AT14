class Type{
    constructor(args){
        this.type = args;
    }
    isType(){
        switch(this.type){
            case "integer": return true;                
            case "string": return true;
            default: return false;
        }
    }
}