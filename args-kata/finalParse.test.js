import { Parse } from "./finalParse.js";
import { Schema } from "./schema.js";
import { FlagSchema } from "./flagSchema.js";

test("Show if the method can compare identify two flags togheter", () => {
  const loginSchema = new FlagSchema("-l", "boolean", "false");
  const portSchema = new FlagSchema("-p", "number", 0);
  const dirSchema = new FlagSchema("-d", "string", "");
  const schema = new Schema([loginSchema, portSchema, dirSchema]);
  const parse = new Parse(schema);
  const test = "-l -p ";

  const result = parse.parsing(test);
  const expected = true;
  expect(result).toBe(expected);
});
