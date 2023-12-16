import React from "react";
import { sortData, addIndex, getPointsPerElement } from "../../utils/sorting";
import Title from "../atoms/Title";
import Table from "../organism/Table";

const TopPointsByTeamTable = ({ data, head, title }) => {
  const teamsData = getPointsPerElement(data, 1, 3);
  const sortedData = sortData(Object.entries(teamsData), 1);
  const indexedData = addIndex(sortedData);

  const [, teamTitle, , pointsTitle] = head;
  const modifiedHead = ["#", teamTitle, pointsTitle];

  return (
    <>
      <Title title={title} />
      <Table head={modifiedHead} data={indexedData} />
    </>
  );
};

export default TopPointsByTeamTable;
