import React from "react";
import { sortData, addIndex } from "../../utils/sorting";
import Title from "../atoms/Title";
import Table from "../organism/Table";

const TopPointsPerGameTable = ({ data, head, title }) => {
  const sortedData = sortData(data, 3);
  const indexedData = addIndex(sortedData);

  const modifiedHead = ["#", ...head];

  return (
    <>
      <Title title={title} />
      <Table head={modifiedHead} data={indexedData} />
    </>
  );
};

export default TopPointsPerGameTable;
