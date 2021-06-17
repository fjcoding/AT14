import { Schema } from "./Schema.js"

test("Function isValueValid should detect false if the second and the third parameters are differents", () =>{
    const schema = new Schema
    const result = schema.isValueValid();
    const expected = false
    expect(result).toBe(expected)
})

