import {Ball} from '../src/game';

jest.mock('../src/game');

test('Mocking function ', () => {
  const ball = new Ball();
  console.log(ball.addList);
  
});

test("Mocking constructor",()=>{
    const ball= jest.fn();
    const a= new Ball();
    a.scene='scene';
    const b={};
    const bound= ball.bind(b);
    bound();
  
    console.log(score.mock.instances);
  });
