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


const check = new VarValidate;
console.log(check.valueDetector("asd"));
console.log(check.valueDetector(123));
console.log(check.valueDetector(true));

console.log(check.valueCheckEmpty());

export{ VarValidate };