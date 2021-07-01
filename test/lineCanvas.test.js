import {Line} from '../src/lineCanvas'

test("Play Game",()=>{
    const html   = document.createElement('canvas'); 
    const canvas = html.getContext('2d'); 
    const ob = new Line(canvas, 10,10,50,50,"blue");
    expect(ob.getColor()).toBe("blue");
})

