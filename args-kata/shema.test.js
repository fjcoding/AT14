import { Schema } from "./schema.js";
import { FlagSchema } from "./flagSchema.js";
import { Detect } from "./detector";

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

test("Schema will verify if -l is a flag of loginSchema", () => {
  const loginSchema = new FlagSchema("-l", "boolean", "false");
  const portSchema = new FlagSchema("-p", "number", 0);
  const dirSchema = new FlagSchema("-d", "string", "");

  const schema = new Schema([loginSchema, dirSchema]);

  const result = schema.isFlag("-l");
  const expected = true;

  expect(result).toBe(expected);
});

test("Detector will verify if the value of the schema is a right value", () => {
  const detector = new Detect();
  const result = detector.finalDetector("boolean", "false");

  const expected = true;

  expect(result).toBe(expected);
});

test("Detector will reject if the value of the schema is a wrong value", () => {
  const detector = new Detect();
  const result = detector.finalDetector("boolean", "8080");

  const expected = false;

  expect(result).toBe(expected);
});

test("Schema will verify if 2 elements are flags", () => {
  const loginSchema = new FlagSchema("-l", "boolean", "false");
  const portSchema = new FlagSchema("-p", "number", 0);
  const dirSchema = new FlagSchema("-d", "string", "");
  const schema = new Schema([loginSchema, portSchema, dirSchema]);

  const result = schema.isTwoFlagsTogether("-p", "-d");

  const expected = true;

  expect(result).toBe(expected);
});

test("Schema will verify if 2 elements are not flags", () => {
  const loginSchema = new FlagSchema("-l", "boolean", "false");
  const portSchema = new FlagSchema("-p", "number", 0);
  const dirSchema = new FlagSchema("-d", "string", "");
  const schema = new Schema([loginSchema, portSchema, dirSchema]);

  const result = schema.isTwoFlagsTogether("-p", "/user/pepe");

  const expected = false;

  expect(result).toBe(expected);
});
