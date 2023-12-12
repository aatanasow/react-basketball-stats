import React from "react";
import TableRow from "../molecules/TableRow";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((entry, index) => (
        <TableRow data={entry} key={entry[0] + index} />
      ))}
    </tbody>
  );
};

export default TableBody;
