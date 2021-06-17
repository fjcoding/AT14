import { Schema } from "./schema.js";
import { FlagSchema } from "./flagSchema.js";

test("Schema will get the -l of the object loginSchema ", () => {
  const loginSchema = new FlagSchema("-l", "boolean", "false");
  const schema = new Schema([loginSchema]);
  const result = schema.getId();
  const expected = ["-l"];
  expect(result).toStrictEqual(expected);
});

test("Schema will get the -p of the object portSchema ", () => {
  const portSchema = new FlagSchema("-p", "number", 0);

  const schema = new Schema([portSchema]);
  const result = schema.getId();
  const expected = ["-p"];
  expect(result).toStrictEqual(expected);
});

test("Schema will get the ids of logginSchema and portSchema ", () => {
  const loginSchema = new FlagSchema("-l", "boolean", "false");
  const portSchema = new FlagSchema("-p", "number", 0);

  const schema = new Schema([loginSchema, portSchema]);
  const result = schema.getId();
  const expected = ["-p", "-l"];
  expect(result).toEqual(expect.arrayContaining(expected));
});

test("Schema will get the ids of logginSchema and portSchema ", () => {
  const loginSchema = new FlagSchema("-l", "boolean", "false");
  const portSchema = new FlagSchema("-p", "number", 0);
  const dirSchema = new FlagSchema("-d", "string", "");

  const schema = new Schema([loginSchema, portSchema]);
  const result = schema.isFlag();
  const expected = true;
  expect(result).toBe(expected);
});
