import { FlagSchema } from "./flagSchema.js";
import { Schema } from "./schema.js";
import { Parse } from "./finalParse.js";

const test1 = "-l -p 8080 -d /usr/logs";

const loginSchema = new FlagSchema("-l", "boolean", "false");
const portSchema = new FlagSchema("-p", "number", 0);
const dirSchema = new FlagSchema("-d", "string", "");

const schema = new Schema([loginSchema, portSchema, dirSchema]);
const parser = new Parse(schema);
const resultado = parser.parsing(test1);
