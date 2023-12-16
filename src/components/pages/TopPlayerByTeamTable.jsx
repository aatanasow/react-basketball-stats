import React from "react";
import { sortData, getTopPlayersByTeam } from "../../utils/sorting";
import Title from "../atoms/Title";
import Table from "../organism/Table";

const TopPlayerByTeamTable = ({ data, head, title }) => {
  const topPlayersByTeam = getTopPlayersByTeam(data);
  const sortedData = sortData(topPlayersByTeam, 2);

  const [playerTitle, teamTitle, , pointsTitle] = head;
  const modifiedHead = [playerTitle, teamTitle, pointsTitle];

  return (
    <>
      <Title title={title} />
      <Table head={modifiedHead} data={sortedData} />
    </>
  );
};

export default TopPlayerByTeamTable;
