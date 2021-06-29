
test("Mocking ball constructor",()=>{
    const ball= jest.fn();
    const a= new ball();
    const b={};
    const bound= ball.bind(b);
    bound();

    console.log(ball.mock.instances);
});