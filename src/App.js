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
import { Route, Routes } from "react-router-dom";
import Menu from "./components/organism/Menu";

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

      {!!data.length && !err.length && (
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route
              path=""
              element={
                <UnsortedTable data={data} head={head} title="General stats" />
              }
            />

            <Route
              path="point-per-game"
              element={
                <TopPointsPerGameTable
                  data={data}
                  head={head}
                  title="Top points per game"
                />
              }
            />

            <Route
              path="points-by-player"
              element={
                <TopPointsByPlayerTable
                  data={data}
                  head={head}
                  title="Top points per player"
                />
              }
            />

            <Route
              path="points-per-minutes"
              element={
                <TopPointsPerMinutesTable
                  data={data}
                  head={head}
                  title="Top points per minutes"
                />
              }
            />
            <Route
              path="points-by-team"
              element={
                <TopPointsByTeamTable
                  data={data}
                  head={head}
                  title="Top points by team"
                />
              }
            />
            <Route
              path="top-player-by-team"
              element={
                <TopPlayerByTeamTable
                  data={data}
                  head={head}
                  title="Top player from every team (by points)"
                />
              }
            />
          </Route>
        </Routes>
      )}

      <Modal errors={err} />
    </div>
  );
}

export default App;
