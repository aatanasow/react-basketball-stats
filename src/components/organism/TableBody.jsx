import React from "react";
import TableRow from "../molecules/TableRow";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((entry) => (
        <TableRow data={entry} key={entry[0]} />
      ))}
    </tbody>
  );
};

export default TableBody;
