class VarValidate
{

    valueDetector=(variable)=>
    {
        return typeof(variable);
    }

    valueCheckEmpty=(flag)=>
    {   var isEmpty = false;

        if(flag == null)
        {
            isEmpty = true;
        }

        return isEmpty;

    }

    valueReplaceDefault=(flag,defValue)=>
    {

        defValue.forEach(defValue => 
        {
            if (flag.id === defValue.id)
            {
                flag.value = defValue.deftValue;
            }
            
        });
        return flag;

    }
/*----------------------------------------------------------------------------------------*/
    
    isFlag=(args,schema)=>
    {
        let isItFlag = false;
        schema.forEach(schema=>
        {
            if(args === schema.id)
            {
                isItFlag=true;
                
            }

        })
        return isItFlag;
    }

    isValidValue=(arg,schema,id)=>
    {
        const varVali = new VarValidate;
        let isVariable = varVali.valueDetector(arg);
        let isFisValuelag = false;
        
        schema.forEach(schema=>
        {
            if(id == schema.id && isVariable==schema.typeValue)
            {
                isFisValuelag=true;
            }
 
        })

        return isFisValuelag;
    }

    ifValueIsNumber=(arg)=>
    {
        if(!isNaN(arg) && arg!= null)
        {
            arg=Number(arg)
        }

        return arg;

    }

    ifValueIsBoolean=(arg)=>
    {
        if(arg == "true")
        {
            arg = true;
        }
        if(arg=="false")
        {
            arg = false;
        }

        return arg;
    }



    
}
//const value = new VarValidate;

//console.log(value.ifValueIsNumber(true) +"   " +typeof(value.ifValueIsNumber(true)));
/*const value = new VarValidate;
const schemaL = new Schema('-l',false,'boolean');
const schemaP = new Schema('-p',0,'number');
const schemaD = new Schema('-d','1','string');

const schema = [schemaL,schemaP,schemaD];
//['-l','-p',8080,'-d','/usr/logs']
const spliarray = '/usr/logs';
console.log(value.isFlag(spliarray,schema))*/
export{ VarValidate };