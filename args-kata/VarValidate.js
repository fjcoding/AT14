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
        if(!isNaN(arg) && arg!= null && arg!= false && arg!= true)
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

export{ VarValidate };