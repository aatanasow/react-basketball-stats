import { useState } from "react";
import "./App.css";
import { stringToArray, arrayToMatrix } from "./utils/data";

function App() {
  const [data, setData] = useState([]);

  function handleFileUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const errors = [];

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
      console.log(reader.result);
      const dataArray = stringToArray(reader.result);
      const dataMatrix = arrayToMatrix(dataArray);

      //console.log(dataArray);
      console.log(dataMatrix);

      dataMatrix.forEach((row, index) => {
        if (row.length !== 4) {
          errors.push(index + 1);
        }
      });

      if (errors.length) {
        errors.forEach((error) =>
          console.error(`Data on row ${error} is invalid`)
        );
      }

      setData(dataMatrix);
    };
  }

  return (
    <div className="App">
      <input type="file" onChange={handleFileUpload} />
      {data}
    </div>
  );
}

export default App;
