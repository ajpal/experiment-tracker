import React from "react";
import { useTable } from "react-table";
import experiments from "./data/test.json";
import CommitLink from "./CommitLink";
import WorkloadInfo from "./WorkloadInfo";

export default function ExperimentTable(props) {
  const data = React.useMemo(() => {
    const rows = [];
    experiments.experiments.forEach((exp, i) => {
      rows.push({
        id: i,
        commit: exp.commit,
        domain: exp.command.domain,
        iters: exp.command.iters || "-",
        workload: exp.command.workload,
        rules: exp.rules,
        log: exp.log,
      });
    });
    return rows;
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Commit",
        accessor: "commit",
        Cell: (props) => <CommitLink repo="ruler" commit={props.cell.value} />,
        getProps: () => ({
          repo: "ruler",
        }),
      },
      {
        Header: "Domain",
        accessor: "domain",
      },
      {
        Header: "Iters",
        accessor: "iters",
      },
      {
        Header: "Workload",
        accessor: "workload",
        Cell: (props) => {
          const workload = props.cell.value;
          return props.cell.value ? (
            <WorkloadInfo
              commit={workload.commit}
              name={workload.name}
              spec={workload.spec}
            />
          ) : (
            <div>-</div>
          );
        },
      },
      {
        Header: "Rules",
        accessor: "rules",
      },
      {
        Header: "Log",
        accessor: "log",
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
