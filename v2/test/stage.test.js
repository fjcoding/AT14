import {drawStage} from '../drawStage.js'

test('Unit test with mocks', () => { 
    const canvas = document.createElement('canvas'); 
    const ctx = canvas.getContext('2d'); 
    const BG_IMG = document.createElement('img'); 
    const drawStageObj = new drawStage(ctx, BG_IMG);
    expect(drawStageObj.getDummy()).toBe(100); 
})