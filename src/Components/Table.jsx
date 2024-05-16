import React from "react";

function Table({ data, type }) {
  const columns = Object.keys(data[0] || {});
  console.log(columns);
  return (
    <table className={type}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  type: "table table-bordered",
  data: [],
};

export default Table;
