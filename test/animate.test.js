describe('illustrate mocks',() =>{

    test('illustrate mocks', ()=>{
        
        //arrange
        const gameLoop= require('../src/animate');
        
    

        //act

        const result= gameLoop.clearRect(0,0,500,400);

        //assert
        console.log(result);
       

    })

})