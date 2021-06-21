import {Flag} from './Flag.js';

class DefaultValue{
    constructor(id, value){
        this.flag= new Flag();
        this.id=id;
        this.value=value;
 
   }
   getDefaultValue(flag){
        if(flag.id==='-p'){
            flag.value= 0;
        }else if(flag.id==='-l'){
            flag.value= false;
        }else{
            flag.value= '';
        }
        return flag.value;
   }
   
}

export{DefaultValue};