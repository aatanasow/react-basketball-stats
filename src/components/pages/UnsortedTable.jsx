import React from "react";
import Title from "../atoms/Title";
import Table from "../organism/Table";

const UnsortedTable = ({ data, head, title }) => {
  return (
    <>
      <Title title={title} />
      <Table head={head} data={data} />
    </>
  );
};

export default UnsortedTable;
