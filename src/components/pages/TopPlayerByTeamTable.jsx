import React from "react";
import TableHead from "../organism/TableHead";
import TableBody from "../organism/TableBody";
import { sortData, getTopPlayersByTeam } from "../../utils/sorting";

const TopPlayerByTeamTable = ({ data, head, title }) => {
  const topPlayersByTeam = getTopPlayersByTeam(data);
  const sortedData = sortData(topPlayersByTeam, 2);

  const [playerTitle, teamTitle, , pointsTitle] = head;
  const modifiedHead = [teamTitle, playerTitle, pointsTitle];

  return (
    <>
      <h2>{title}</h2>
      <hr />
      <table className="table">
        <TableHead data={modifiedHead} />
        <TableBody data={sortedData} />
      </table>
    </>
  );
};

export default TopPlayerByTeamTable;
