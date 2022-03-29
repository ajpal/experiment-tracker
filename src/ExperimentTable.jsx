import React from "react";
import experiments from "./data/test.json";

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
              <td>{experiment.commit}</td>
              <td>{experiment.command.domain}</td>
              <td>{experiment.command.iters}</td>
              <td>
                {experiment.command.workload && (
                  <table>
                    <tbody>
                      <tr>
                        <td>{experiment.command.workload.commit}</td>
                        <td>{experiment.command.workload.spec}</td>
                        <td>{experiment.command.workload.name}</td>
                      </tr>
                    </tbody>
                  </table>
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
