class Parser{
    constructor(stringCmd){
        this.stringCmd = stringCmd;
        this.arrayArgs = this.cleanScapes(stringCmd.split(" "));
        this.myindex   = 0;
        this.args      = new Array(); 
    }
    cleanScapes(arrayStr){
        let newArray =new Array();
        arrayStr.forEach(element => {
            if(element.trim()!=='')
                newArray.push(element);
        });
        //console.log(newArray);
        return newArray;
    }
    isFLag(str){
        if(str.indexOf("-")>=0){
            return true;
        }
        return false;
    }
    getMaps(){
        this.arrayArgs.forEach((element, index, arr)=>{
            if(this.isFLag(element)){
                let myargs = {};                
                if(arr[index+1]) 
                {
                    
                    myargs.name  = element;
                    myargs.value = null;
                    if(!this.isFLag(arr[index+1]))
                    {
                        myargs.value = arr[index+1];
                    }
                    
                    this.args.push(myargs);                
                }                    
                else
                {
                    myargs.name  = element;
                    myargs.value = null;
                    this.args.push(myargs);                                    
                }
                
            }                        
        })
        return this.args;
    }

}

export {Parser};
