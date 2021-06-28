import { jest } from "@jest/globals";

jest.mock('./components/Scoreboard.js');
const scoreboard = require('./components/Scoreboard.js');
const mMock = jest.fn();
scoreboard.mockImplementation(() => {
  return {
    m: mMock,
  };
});

const some = new scoreboard();
some.m('scene');
console.log('Calls to m: ', mMock.mock.calls);