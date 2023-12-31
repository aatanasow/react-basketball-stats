import React from "react";
import TableCell from "../atoms/TableCell";

const TableRow = ({ data, cellType }) => {
  return (
    <tr>
      {data.map((field) => (
        <TableCell value={field} type={cellType} key={field} />
      ))}
    </tr>
  );
};

export default TableRow;
