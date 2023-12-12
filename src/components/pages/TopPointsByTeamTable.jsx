import React from "react";
import TableHead from "../organism/TableHead";
import TableBody from "../organism/TableBody";
import { sortData, addIndex, getPointsPerElement } from "../../utils/sorting";

const TopPointsByTeamTable = ({ data, head, title }) => {
  const teamsData = getPointsPerElement(data, 1, 3);
  const sortedData = sortData(Object.entries(teamsData), 1);
  const indexedData = addIndex(sortedData);

  const [, teamTitle, , pointsTitle] = head;
  const modifiedHead = ["#", teamTitle, pointsTitle];

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

export default TopPointsByTeamTable;
