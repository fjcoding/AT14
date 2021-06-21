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
        
        schema.forEach(schema => 
        {
            if(flag.id === schema.id)
            {
                isValid = validate.valueDetector(flag.value) === schema.typeValue;
            }
        });
        return isValid;
    }

    completeIfEmpty=(schema,flag,defvalue)=>
    {
        const validate = new VarValidate;
        
        schema.forEach(schema => 
        {
            if(flag.id === schema.id)
            {

                if(validate.valueCheckEmpty(flag.value))
                {
                //console.log("el valor es:"+validate.valueCheckEmpty(flag));
                   flag = validate.valueReplaceDefault(flag,defvalue);
                }
                //funcion para reemplazar values faltates en el flag
  
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


checkIfFlagLEmpty=(flag)=>
{  
    const isEmpty = false;
    if(flag.id === "-l" && flag.value == null)
    {  
        flag.value = false;
        return flag;
    }
    else{

        flag.value = true;
        return flag;
    }
}
}

const schemaL = new Schema('-l',false,'boolean');
const schemaP = new Schema('-p',0,'number');
const schemaD = new Schema('-d','1','string');

const schema = [schemaL,schemaP,schemaD];

const parses = new Parses;

const splited = parses.splitterArguments('-l 0 -p 8080 -d /usr/logs');

const flagCreated = parses.buildIfIsFlag(splited,schema);

console.log(flagCreated);

console.log(parses.parseIfPosible(flagCreated));

/*const args = "-l -p 8080 -d /usr/logs";







const defValL = new DefaultValue('-l', false);
const defValD = new DefaultValue('-d',"asd");
const defValP = new DefaultValue('-p',0);

const defvalue = [defValL,defValD,defValP];

const schemaL = new Schema('-l',false,'boolean');
const schemaP = new Schema('-p',0,'number');
const schemaD = new Schema('-d','1','string');

const flagL = new Flag('-l');
const flagP = new Flag('-p',2);
const flagD = new Flag('-d','/usr/logs');

/*const flagL = new Flag('-l');
const flagP = new Flag('-p');
const flagD = new Flag('-d');*/

/*const parses = new Parses;
console.log("check if the flag accomplish the schema")
console.log(parses.isItValid([schemaL,schemaP,schemaD],flagL));
console.log(parses.isItValid([schemaL,schemaP,schemaD],flagP));
console.log(parses.isItValid([schemaL,schemaP,schemaD],flagD));*/


/*console.log("check if the we can autocomplete the missing value")

console.log("bandera1")
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagL,defvalue).id);
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagL,defvalue).value);

console.log("bandera2")
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagP,defvalue).id);
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagP,defvalue).value);

console.log("bandera3")
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagD,defvalue).id);
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagD,defvalue).value);*/


export { Parses };