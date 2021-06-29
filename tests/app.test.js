import { TestWatcher } from "jest"

describe('illustrate mocks',() =>{

    test('illustrate mocks', ()=>{
        
        //arrange
        const greeter= require('./app.js');
        const mock= jest.fn().mockReturnValue('mocked name');
        greeter.getFullName=mock;

        //act

        const result= greeter.greet('Est', 'Hl');

        //assert
        console.log(result);
        expect(result).toBe('Hello! mocked name');
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);

    })

})