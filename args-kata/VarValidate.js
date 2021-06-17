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
}

export{ VarValidate };