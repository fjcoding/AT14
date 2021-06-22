import { Argument } from './Argument.js'

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
                let myargs = new Argument(element, null);                
                if(arr[index+1]) 
                {
                    myargs.setValue(null);
                    if(!this.isFLag(arr[index+1]))
                    {
                        myargs.setValue(arr[index+1]);
                    }
                }                    
                else
                {
                    myargs.setValue(null);
                }
                this.args.push(myargs);                      
            }                        
        })
        return this.args;
    }

}

export {Parser};
