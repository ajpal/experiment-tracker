import React from "react";
import experiments from "./data/test.json";

import CommitLink from "./CommitLink";
import WorkloadInfo from "./WorkloadInfo";

export default function ExperimentTable() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Commit</th>
            <th>Domain</th>
            <th colSpan="3">Params</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>Iters</th>
            <th>Workload</th>
            <th>Prior Rules</th>
          </tr>
          {experiments.experiments.map((experiment, i) => (
            <tr key={i}>
              <td>
                <CommitLink repo="ruler" commit={experiment.commit} />
              </td>
              <td>{experiment.command.domain}</td>
              <td>{experiment.command.iters}</td>
              <td>
                {experiment.command.workload && (
                  <WorkloadInfo
                    commit={experiment.command.workload.commit}
                    spec={experiment.command.workload.spec}
                    name={experiment.command.workload.name}
                  />
                )}
              </td>
              <td>{experiment.command["prior-rules"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
