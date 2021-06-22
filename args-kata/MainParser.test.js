import {MainParser} from './MainParser.js'
import { Schema } from "./Schema.js";
import { DefaultValue } from './DefaultValue.js'
import { Flag } from "./Flag.js";

test('mainParser should return an array with "flags" and boolean "arguments"',()=>{

    const detect = new MainParser();
    const schemaL = new Schema('-l',false,'boolean');
    const schemaP = new Schema('-p',0,'number');
    const schemaD = new Schema('-d','1','string');
    const schemaF = new Schema('-f','1','string');

    const schema = [schemaL,schemaP,schemaD,schemaF];

    const defValL = new DefaultValue('-l', false);
    const defValP = new DefaultValue('-p',0);
    const defValD = new DefaultValue('-d',"asd");
    const defValF = new DefaultValue('-d',"asd");

    const defvalue = [defValL,defValD,defValP,defValF];
    const args = "-l asd -p 8080 -d /usr/logs -f 789"

    const result = detect.mainParser(args,schema,defvalue);

    const expected = [
        [
          new Flag ('-l', 'asd'),
          new Flag ('-p', 8080),
          new Flag ('-d', '/usr/logs'),
          new Flag ('-f', 789 )
        ],
        [ false, true, true, false ]
      ]

    expect(result).toStrictEqual(expected)

})

test('printMainValues should print the flags and if any flags value doesnt accomplish the schema',()=>{})

