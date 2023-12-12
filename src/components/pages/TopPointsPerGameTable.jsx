import React from "react";
import TableHead from "../organism/TableHead";
import TableBody from "../organism/TableBody";
import { sortData, addIndex } from "../../utils/sorting";

const TopPointsPerGameTable = ({ data, head, title }) => {
  const sortedData = sortData(data, 3);
  const indexedData = addIndex(sortedData);

  const modifiedHead = ["#", ...head];

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

export default TopPointsPerGameTable;
