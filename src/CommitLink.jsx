import React from "react";

export default function CommitLink(props) {
  const { repo, commit } = props;
  const link = `https://github.com/uwplse/${repo}/commit/${commit}`;
  return <a href={link}>{commit}</a>;
}
