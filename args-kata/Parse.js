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

                if(validate.valueCheckEmpty(flag.value))
                {
                //console.log("el valor es:"+validate.valueCheckEmpty(flag));
                   flag = validate.valueReplaceDefault(flag,defvalue);
                }
                //funcion para reemplazar values faltates en el flag
                isValid = validate.valueDetector(flag.value) === schema.typeValue;
  
            }
        });
        return isValid;
    }

}

const defValL = new DefaultValue('-l', false);
const defValD = new DefaultValue('-d'," ");
const defValP = new DefaultValue('-p',0);

const defvalue = [defValL,defValD,defValP];

const schemaL = new Schema('-l',false,'boolean');
const schemaP = new Schema('-p',0,'number');
const schemaD = new Schema('-d','1','string');

const flagL = new Flag('-l');
const flagP = new Flag('-p',2);
const flagD = new Flag('-d','/usr/logs');

const parse = new Parse;

console.log(parse.isItValid([schemaL,schemaP,schemaD],flagL));
console.log(parse.isItValid([schemaL,schemaP,schemaD],flagP));
console.log(parse.isItValid([schemaL,schemaP,schemaD],flagD));
