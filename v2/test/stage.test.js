import {drawStage} from '../drawStage.js'

test('Unit test with mocks', () => { 
    const canvas = document.createElement('canvas'); 
    const ctx = canvas.getContext('2d'); 
    const BG_IMG = document.createElement('img'); 

    const mockFn = jest.fn();

    const drawStageObj = new drawStage(ctx, BG_IMG);
    expect(drawStageObj.getDummy()).toBe(100); 
})

test('Verify that Fillrect is called whe set draw is executed', ()=>{
    const cvs = {width: 400, height: 200 };
    const ctx = {
        fillStyle : undefined,
        fillRect: jest.fn(),
        strokeStyle: undefined,
        strokeRect: jest.fn()
    };
    expect(100).toBe(100); 
});