const stringCmd = "-l -p 8080 -d /user/se -g";
class arg{
    constructor(flagId, Value = null){
        this.flagId = flagId;
        this.Value  = Value;
    }

    getFlagId(){ return this.flagId; }
    getValue(){ return this.Value; }

    setFlagId(flagId){this.flagId = flagId; }
    setValue(Value){this.Value = Value; }
}
class parser{
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
    maps(){
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
        console.log(this.args);
    }

}
/*
const myargs = [
    {name:"-d", value:"/sadas"},
    {name:"-p", value:8080}
];

myargs.forEach(element=>{
    console.log(element.name + " "+element.value);
});
*/
const obj = new parser(stringCmd);
obj.maps();

//obj.myindex = 100;
//console.log(obj.next());
/*
let arrayarg = Array();
array = cmd.split(" ");
array.forEach( (element, index) => {
    if(element.indexOf("-")>=0){
        arrayarg = new
    }
});
*/