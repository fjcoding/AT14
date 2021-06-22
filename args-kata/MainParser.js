import {Parses} from "./Parses.js"
import { Flag } from "./Flag.js";
import { Schema } from "./Schema.js";
import { DefaultValue } from './DefaultValue.js'

class MainParser
{

    mainParser(argument,schema,defvalue)
    {
        const arg = argument;
        const pars = new Parses();
        let isItValid = new Array;
        let value
        const argSplited = pars.splitterArguments(arg);
        const buildFlag = pars.buildIfIsFlag(argSplited,schema);
        let changeValue = pars.parseIfPosible(buildFlag);
    
        changeValue.forEach(changeValue => {
    
            changeValue = pars.completeIfEmpty(schema,changeValue,defvalue);
            
        });
    
        let changeTypeVal = pars.parseIfPosible(changeValue);
    
        changeTypeVal.forEach(changeTypeVal1 =>
            {
                changeTypeVal1 = pars.isItValid(schema,changeTypeVal1);
                value = isItValid.push(changeTypeVal1);
            })
    
        return [changeTypeVal,isItValid];
    }
    
    printMainValues=(args)=>
    {  
        const schemaL = new Schema('-l',false,'boolean');
        const schemaP = new Schema('-p',0,'number');
        const schemaD = new Schema('-d','1','string');
        const schemaF = new Schema('-f','1','string');
    
        const schema = [schemaL,schemaP,schemaD,schemaF];
    
        const defValL = new DefaultValue('-l', false);
        const defValP = new DefaultValue('-p',0);
        const defValD = new DefaultValue('-d',"asd");
        const defValF = new DefaultValue('-f',"asd");
    
        const defvalue = [defValL,defValD,defValP,defValF];
    
        const mainPars = new MainParser;
    
        const flags = mainPars.mainParser(args,schema,defvalue);
        //console.log(flags)
        for(let i = 0; i<=flags[0].length-1;i = i+1)
        {
            if(flags[1][i]==false)
            {
            console.log("El valor de la bandera "+flags[0][i].id+ " no coincide con el tipo de valor del esquema")
            }
            console.log("flag: "+flags[0][i].id+" ,value :"+flags[0][i].value)
        }
        
    }

    /*
                    try{
                    throw new Error ("El valor de la bandera "+flags[0][i].id+ " no coincide con el tipo de valor del esquema")
                }
                catch(ex)
                {           
                    //console.error(ex);
                    console.error(ex.toString())
                }
    */ 

    /*mainParser(argument,schema,defvalue)
    {
        const arg = argument;
        const pars = new Parses();
    
        const argSplited = pars.splitterArguments(arg);
        const buildFlag = pars.buildIfIsFlag(argSplited,schema);
        let changeValue = pars.parseIfPosible(buildFlag);
    
        changeValue.forEach(changeValue => {
    
            changeValue = pars.completeIfEmpty(schema,changeValue,defvalue);
            
        });
    
        let changeTypeVal = pars.parseIfPosible(changeValue);
    
        changeTypeVal.forEach(changeTypeVal1 =>
            {
                changeTypeVal1 = pars.isItValid(schema,changeTypeVal1);
            })
    
        
        return changeTypeVal;
    }
    
    printMainValues=(args)=>
    {  
        const schemaL = new Schema('-l',false,'boolean');
        const schemaP = new Schema('-p',0,'number');
        const schemaD = new Schema('-d','1','string');
    
        const schema = [schemaL,schemaP,schemaD];
    
        const defValL = new DefaultValue('-l', false);
        const defValP = new DefaultValue('-p',0);
        const defValD = new DefaultValue('-d',"asd");
    
        const defvalue = [defValL,defValD,defValP];
    
        const mainPars = new MainParser;
    
        const flags = mainPars.mainParser(args,schema,defvalue);
        
        return flags;
    }*/

}








const args = "-l asd -p 8080 -d /usr/logs -f 789"
const mainParse = new MainParser;
const flags = mainParse.printMainValues(args);


export{MainParser}