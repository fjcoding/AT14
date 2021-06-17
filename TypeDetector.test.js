import { test } from "@jest/globals";
import { Schema } from "inspector";
test("the Flag must detect if the value given is a flag", () => {
  const flag = new Schema();
  const result = flag.isFlag("-p");
  const expected = true;
  expect(result).toBe(expected);
});

test("The compareTwoFlagsTogether must tell us if comparing two elements are both flags or not", () => {
  const compare = new Schema();
  const result = compare.compareTwoFlagsTogether("-p", "-l");
  const expected = true;
  expect(result).toBe(expected);
});
