
import {DefaultValue} from './DefaultValue.js'
import {Flag} from './Flag'

test("DefaultValue should return '0' given a flag with id '-p'", ()=>{
    const flag= new Flag('-p');
    const defaultValue= new DefaultValue();
    
    const result = defaultValue.getDefaultValue(flag);
    const expected = 0
    expect(result).toBe(expected)
})

test("DefaultValue should return 'False' given a flag with id '-l'", ()=>{
    const flag= new Flag('-l');
    const defaultValue= new DefaultValue();
    
    const result = defaultValue.getDefaultValue(flag);
    const expected =false
    expect(result).toBe(expected)
})

test("DefaultValue should return '' given a flag with id '-d'", ()=>{
    const flag= new Flag('-d');
    const defaultValue= new DefaultValue();
    
    const result = defaultValue.getDefaultValue(flag);
    const expected =''
    expect(result).toBe(expected)
})