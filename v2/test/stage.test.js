import {Stage} from '../stage.js'

test('Unit test with mocks', () => { 
    const canvas = document.createElement('canvas'); 
    const ctx = canvas.getContext('2d'); 
    const BG_IMG = document.createElement('img'); 
    const stageObj = new Stage(ctx, BG_IMG);
    expect(stageObj.getDummy()).toBe(100); 
})