import { useState } from "react";
import "./App.css";
import { stringToArray, arrayToMatrix } from "./utils/data";
import UnsortedTable from "./components/pages/UnsortedTable";
import TopPointsPerGameTable from "./components/pages/TopPointsPerGameTable";
import TopPointsPerMinutesTable from "./components/pages/TopPointsPerMinutesTable";
import TopPointsByTeamTable from "./components/pages/TopPointsByTeamTable";
import TopPointsByPlayerTable from "./components/pages/TopPointsByPlayerTable";
import TopPlayerByTeamTable from "./components/pages/TopPlayerByTeamTable";
import Modal from "./components/organism/Modal";
import { openModal } from "./utils/modal";

function App() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);

  const head = ["Player name", "Team", "Time played", "Scored points"];

  function handleFileUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const errors = [];

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
      //console.log(reader.result);
      const dataArray = stringToArray(reader.result);
      const dataMatrix = arrayToMatrix(dataArray);

      //console.log(dataArray);
      //console.log(dataMatrix);

      dataMatrix.forEach((row, index) => {
        if (row.length !== 4) {
          errors.push(index + 1);
        }
      });

      if (errors.length) {
        setErr(errors);
        errors.forEach((error) =>
          console.error(`Data on row ${error} is invalid`)
        );
        openModal();
      }

      setData(dataMatrix);
    };
  }

  return (
    <div className="App">
      <div className="load">
        <input type="file" onChange={handleFileUpload} />
      </div>

      <Modal errors={err} />
      {!!data.length && !err.length && (
        <>
          <UnsortedTable data={data} head={head} title="General stats" />
          <TopPointsPerGameTable
            data={data}
            head={head}
            title="Top points per game"
          />
          <TopPointsByPlayerTable
            data={data}
            head={head}
            title="Top points per player"
          />
          <TopPointsPerMinutesTable
            data={data}
            head={head}
            title="Top points per minutes"
          />
          <TopPointsByTeamTable
            data={data}
            head={head}
            title="Top points by team"
          />
          <TopPlayerByTeamTable
            data={data}
            head={head}
            title="Top player from every team (by points)"
          />
        </>
      )}
    </div>
  );
}

export default App;
