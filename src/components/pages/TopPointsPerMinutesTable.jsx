import React from "react";
import {
  sortData,
  addIndex,
  addPointsPerSec,
  combinePlayerGames,
} from "../../utils/sorting";
import Title from "../atoms/Title";
import Table from "../organism/Table";

const TopPointsPerMinutesTable = ({ data, head, title }) => {
  const combinedGames = combinePlayerGames(data);
  const dataModified = addPointsPerSec(combinedGames);
  const sortedData = sortData(dataModified, 4);
  const indexedData = addIndex(sortedData);

  const modifiedHead = ["#", ...head, "Points per second"];

  return (
    <>
      <Title title={title} />
      <Table head={modifiedHead} data={indexedData} />
    </>
  );
};

export default TopPointsPerMinutesTable;
