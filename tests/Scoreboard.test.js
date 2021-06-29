
import { expect, jest } from '@jest/globals';
import {Scoreboard} from '../components/Scoreboard';

jest.mock('../components/Scoreboard');

test('Mocking function incrementPoints', () => {
  const scoreboard = new Scoreboard();
  console.log(scoreboard.incrementPoints());
  console.log(scoreboard.create());
});

test("Mocking constructor",()=>{
  const score= jest.fn();
  const a= new score();
  a.scene='scene';
  const b={};
  const bound= score.bind(b);
  bound();

  console.log(score.mock.instances);
});