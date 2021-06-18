import { FlagSchema } from "./flagSchema.js";
import { Detect } from "./detector.js";

const exercise = "-l -p 8080 -d /usr/logs";
const exerciseSplit = exercise.split(" ");
class Schema {
  constructor(listOfSchemas) {
    this.listOfSchemas = listOfSchemas;
    this.exercise = exerciseSplit;
    this.detector = new Detect();
  }
  getId() {
    const listId = [];
    this.listOfSchemas.forEach((schema) => {
      listId.push(schema.id);
    });
    return listId;
  }
  isFlag(value) {
    const listofID = this.getId();
    let isValid = false;
    if (listofID.includes(value)) {
      return (isValid = true);
    } else {
      return isValid;
    }
  }

  compareTwoFlagsTogether(firstElement, secondElement) {
    if (this.isFlag(firstElement) && this.isFlag(secondElement)) {
      return true;
    } else {
      return false;
    }
  }

  parse() {
    exerciseSplit.forEach((element, index, array) => {
      const twoFlagTogether = this.compareTwoFlagsTogether(
        element,
        array[index + 1]
      );
      if (twoFlagTogether === true) {
        this.listOfSchemas.forEach((schema) => {
          if (schema.id === element) {
            return (
              "La bandera",
              schema.id,
              "no contiene ningun valor por eso se le asignara el valor",
              schema.defaultValue
            );
          }
        });
      }
    });
  }
}

const loginSchema = new FlagSchema("-l", "boolean", "false");
const portSchema = new FlagSchema("-p", "number", 0);
const dirSchema = new FlagSchema("-d", "string", "");

const schema = new Schema([loginSchema, portSchema, dirSchema]);
const listIds = schema.getId();
const flagsTogether = schema.compareTwoFlagsTogether(listIds);
//console.log(schema.isFlag("-j"), "is flag");
//console.log(schema.parse());

export { Schema };
