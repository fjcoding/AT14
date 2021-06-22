import { DefaultValue } from './DefaultValue.js'
import { VarValidate } from './VarValidate.js';
import { Schema } from "./Schema.js";
import { Flag } from "./Flag.js";

class Parses
{

    isItValid=(schema,flag)=>
    { 
        let isValid = false;
        const validate = new VarValidate;
        let valueType;
            
        schema.forEach(schema => 
        {
            if(flag.id === schema.id)
            {
                isValid = validate.valueDetector(flag.value) === schema.typeValue;
                valueType = schema.typeValue;
            }
        });
        return isValid;
             
    }
    /*
    isItValid=(schema,flag)=>
    {   try{
            let isValid = false;
            const validate = new VarValidate;
            let valueType;
            
            schema.forEach(schema => 
            {
                if(flag.id === schema.id)
                {
                    isValid = validate.valueDetector(flag.value) === schema.typeValue;
                    valueType = schema.typeValue;
                }
            });
            if(isValid == false)
            {
                throw new Error("El valor de la bandera "+flag.id +" no es del tipo "+ valueType +" esperado en el schema")
            }
            else
            {
                return flag;
            }
            
        }
        catch(ex)
        {           
            //console.error(ex);
            console.error(ex.toString())
        }

    }
*/
    completeIfEmpty=(schema,flag,defvalue)=>
    {
        const validate = new VarValidate;
        
        schema.forEach(schema => 
        {
            if(flag.id === schema.id)
            {

                if(validate.valueCheckEmpty(flag.value))
                {
                   flag = validate.valueReplaceDefault(flag,defvalue);
                }

            }
        });
        return flag;
    }

//------------------------------------------------------------------------
    splitterArguments = (args)=>
    {   
        const splitedArguments = args.split(" ");

        return splitedArguments;

    }

    buildIfIsFlag=(splitedArguments,schema)=>
    {
        const validate = new VarValidate;
        let idFlag=null;
        let valueFlag = null;
        let newFlags = new Array();
        let newF;
        for (let i=0;i<=splitedArguments.length; i=i+1)
        {
            
            if(validate.isFlag(splitedArguments[i],schema))
            {
                idFlag = splitedArguments[i];
                //if(validate.isValidValue(splitedArguments[i+1],schema,idFlag)) this function use to validate if the value matches the schema's default value
                if(!validate.isFlag(splitedArguments[i+1],schema))
                {
                    valueFlag = splitedArguments[i+1];

                    newF = newFlags.push(new Flag(idFlag,valueFlag));
                }
                else{
                    newF = newFlags.push(new Flag(idFlag));
                }
            }
        }
        return newFlags;
    }

    parseIfPosible=(newFlags)=>
    {
        const validate = new VarValidate;
        newFlags.forEach(newFlags=>{

            newFlags.value=validate.ifValueIsNumber(newFlags.value);
            newFlags.value=validate.ifValueIsBoolean(newFlags.value);
                
        })
        return newFlags;
    }

}


export { Parses };