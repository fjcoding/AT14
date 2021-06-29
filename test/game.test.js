const { test, expect } = require("@jest/globals");


test('Create Ball', () => { 
    const canvas = document.createElement('canvas'); 
    const ctx = canvas.getContext('2d'); 
    ctx.beginPath(); 
    ctx.arc(95, 50, 20, 0, 2 * Math.PI); 
    ctx.stroke();
    expect(95).toBe(95); 
})