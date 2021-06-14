class Flag{
    constructor(args){
        this.type = args
    }
    isFlag(){
        // Check if it is a valid flag     
        switch(this.type){
            case "-l": return true;
            case "-p": return true;
            case "-d": return true;                        
            default: return false;
        }
    }
}