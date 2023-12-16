import { useState } from "react";
import "./App.css";
import UnsortedTable from "./components/pages/UnsortedTable";
import TopPointsPerGameTable from "./components/pages/TopPointsPerGameTable";
import TopPointsPerMinutesTable from "./components/pages/TopPointsPerMinutesTable";
import TopPointsByTeamTable from "./components/pages/TopPointsByTeamTable";
import TopPointsByPlayerTable from "./components/pages/TopPointsByPlayerTable";
import TopPlayerByTeamTable from "./components/pages/TopPlayerByTeamTable";
import Modal from "./components/organism/Modal";
import { readFile } from "./utils/file";
import FileUpload from "./components/atoms/FileUpload";

function App() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);

  const head = ["Player name", "Team", "Time played", "Scored points"];

  function handleFileUpload(e) {
    e.preventDefault();
    readFile(e)
      .then((result) => setData(result))
      .catch((err) => setErr(err));
  }

  return (
    <div className="App">
      <FileUpload changeHandler={handleFileUpload} />

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
