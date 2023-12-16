import { isJson, jsonToArray, stringToArray, arrayToMatrix } from "./data";
import { openModal } from "./modal";

function readFile(e) {
  return new Promise((resolve, reject) => {
    const file = e.target.files[0];
    //console.log(file.name);
    const errors = [];

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
      let dataMatrix = [];
      if (isJson(reader.result)) {
        console.log("JSON");

        dataMatrix = jsonToArray(reader.result);
      } else {
        const dataArray = stringToArray(reader.result);
        dataMatrix = arrayToMatrix(dataArray);
        dataMatrix.forEach((row, index) => {
          if (row.length !== 4) {
            errors.push(index + 1);
          }
        });
      }

      if (errors.length) {
        //setErr(errors);
        errors.forEach((error) =>
          console.error(`Data on row ${error} is invalid`)
        );
        openModal();
        reject(errors);
      }

      //setData(dataMatrix);
      resolve(dataMatrix);
    };
    reader.onerror = reject;
  });
}

export { readFile };
