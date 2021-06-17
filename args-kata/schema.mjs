import { FlagSchema } from "./flagSchema.mjs";
import { Detect } from "./detector.mjs";

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
    this.exercise.forEach((element, index, array) => {
      const flagTogether = this.compareTwoFlagsTogether(
        element,
        array[index + 1]
      );
      if (flagTogether === true) {
        this.listOfSchemas.forEach((schema) => {
          if (schema.id === element) {
            console.log(
              "La bandera",
              schema.id,
              "su valor por defecto es:",
              schema.defaultValue
            );
          } else {
            this.listOfSchemas.forEach((schema) => {
              if (element === schema.id) {
                const parseando = this.detector.finalDetector(
                  schema.typeValue,
                  array[index + 1]
                ); /*
                const messageC = "correcto";
                const messageI = "incorrecto";
                if (parse == true) {
                  return messageC;
                } else {
                  return messageI;
                }*/
                console.log(
                  "la bandera",
                  schema.id,
                  "obtuvo el valor de: ",
                  array[index + 1],
                  "y se valido el valor y es",
                  parseando
                );
              }
            });
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
console.log(schema.isFlag("-p"));
