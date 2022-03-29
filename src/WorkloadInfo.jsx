import React from "react";
import CommitLink from "./CommitLink";

export default function WorkloadInfo(props) {
  const { commit, name, spec } = props;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <CommitLink repo="enumo" commit={commit} />
          </td>
          <td>{spec}</td>
          <td>{name}</td>
        </tr>
      </tbody>
    </table>
  );
}
