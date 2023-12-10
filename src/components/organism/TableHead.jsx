import React from "react";
import TableRow from "../molecules/TableRow";

const TableHead = ({ data = [] }) => {
  return (
    <thead>
      <TableRow data={data} cellType={"heading"} />
    </thead>
  );
};

export default TableHead;
