export class Schema {
  constructor(listOfFlagSchemas) {
    this.listOfFlagSchemas = listOfFlagSchemas;
  }
  getListSchemas() {
    return this.listOfFlagSchemas;
  }
  getId() {
    const listId = [];
    this.listOfFlagSchemas.forEach((flagSchema) => {
      listId.push(flagSchema.id);
    });
    return listId;
  }
  isFlag(value) {
    const listofID = this.getId();
    let isValid = false;
    if (listofID.includes(value)) {
      isValid = true;
    }
    return isValid;
  }

  isTwoFlagsTogether(firstElement, secondElement) {
    const isFistFlag = this.isFlag(firstElement);
    const isSecondFlag = this.isFlag(secondElement);
    if (isFistFlag === isSecondFlag) {
      return true;
    } else {
      return false;
    }
  }
}
/*
const loginSchema = new FlagSchema("-l", "boolean", "false");
const portSchema = new FlagSchema("-p", "number", 0);
const dirSchema = new FlagSchema("-d", "string", "");

const schema = new Schema([loginSchema, portSchema, dirSchema]);
const listIds = schema.getId();
const flagsTogether = schema.compareTwoFlagsTogether();*/
