import React from "react";
import TableHead from "../organism/TableHead";
import TableBody from "../organism/TableBody";
import {
  sortData,
  addIndex,
  addPointsPerSec,
  combinePlayerGames,
} from "../../utils/sorting";

const TopPointsPerMinutesTable = ({ data, head, title }) => {
  const combinedGames = combinePlayerGames(data);
  const dataModified = addPointsPerSec(combinedGames);
  const sortedData = sortData(dataModified, 4);
  const indexedData = addIndex(sortedData);

  const modifiedHead = ["#", ...head, "Points per second"];

  return (
    <>
      <h2>{title}</h2>
      <hr />
      <table className="table">
        <TableHead data={modifiedHead} />
        <TableBody data={indexedData} />
      </table>
    </>
  );
};

export default TopPointsPerMinutesTable;
