import { DefaultValue } from './DefaultValue.js'
import { VarValidate } from './VarValidate.js';
import { Schema } from "./Schema.js";
import { Flag } from "./Flag.js";

class Parse
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

    completeIfEmpty=(schema,flag)=>
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

}

const defValL = new DefaultValue('-l', false);
const defValD = new DefaultValue('-d',"asd");
const defValP = new DefaultValue('-p',0);

const defvalue = [defValL,defValD,defValP];

const schemaL = new Schema('-l',false,'boolean');
const schemaP = new Schema('-p',0,'number');
const schemaD = new Schema('-d','1','string');

/*const flagL = new Flag('-l');
const flagP = new Flag('-p',2);
const flagD = new Flag('-d','/usr/logs');*/

const flagL = new Flag('-l');
const flagP = new Flag('-p');
const flagD = new Flag('-d');

const parse = new Parse;
console.log("check if the flag accomplish the schema")
console.log(parse.isItValid([schemaL,schemaP,schemaD],flagL));
console.log(parse.isItValid([schemaL,schemaP,schemaD],flagP));
console.log(parse.isItValid([schemaL,schemaP,schemaD],flagD));


console.log("check if the we can autocomplete the missing value")


console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagL).id);
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagL).value);

console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagP).id);
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagP).value);

console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagD).id);
console.log(parse.completeIfEmpty([schemaL,schemaP,schemaD],flagD).value);
