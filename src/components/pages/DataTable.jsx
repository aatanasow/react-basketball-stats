import React from "react";
import TableHead from "../organism/TableHead";
import TableBody from "../organism/TableBody";

const UserTable = ({ data, head, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <hr />
      <table className="table">
        <TableHead data={head} />
        <TableBody data={data} />
      </table>
    </>
  );
};

export default UserTable;
