import { Detect } from "./detector.js";

export class Parse {
  constructor(schema) {
    this.schema = schema;
    this.detect = new Detect();
  }
  parsing(example) {
    const arrayOfargs = example.split(" ");
    arrayOfargs.forEach((element, index, array) => {
      const arryas = [];
      if (this.schema.isFlag(element) === true) {
        const validatingFlags = this.schema.isTwoFlagsTogether(
          element,
          array[index + 1]
        );
        if (validatingFlags === true) {
          const listas = this.schema.getListSchemas();
          listas.forEach((schemaList) => {
            if (schemaList.id === element) {
              console.log(
                "el elemento",
                element,
                "no tiene un valor asignado por lo que se le asignara el valor",
                schemaList.defaultValue
              );
            }
          });
        } else {
          const listas = this.schema.getListSchemas();

          listas.forEach((schemaList) => {
            if (schemaList.id == listas.id) {
              const isRightValue = this.detect.finalDetector(
                listas.typeValue,
                array[index + 1]
              );
              console.log(
                "El elemento",
                schemaList.id,
                "necesita un valor",
                schemaList.typeValue,
                "y se le entrego un valor",
                array[index + 1],
                "por tal razon es:",
                isRightValue
              );
            }
          });
        }
      }
    });
  }
}
