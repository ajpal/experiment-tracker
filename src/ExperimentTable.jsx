import React from "react";
import { useTable } from "react-table";
import experiments from "./data/test.json";
import CommitLink from "./CommitLink";

export default function ExperimentTable(props) {
  const data = React.useMemo(() => {
    const rows = [];
    experiments.experiments.forEach((exp, i) => {
      rows.push({
        id: i,
        commit: exp.commit,
        domain: exp.command.domain,
      });
    });
    return rows;
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Commit",
        accessor: "commit",
        Cell: CommitLink,
        getProps: () => ({
          repo: "ruler",
        }),
      },
      {
        Header: "Domain",
        accessor: "domain",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
