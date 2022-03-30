import React from "react";

export default function RuleList(props) {
  const { filename } = props;
  const jsonData = require(`./data/raw/${filename}`);

  return (
    <div style={{ textAlign: "left", fontFamily: "monospace" }}>
      {jsonData.new_eqs.map((rule, i) => (
        <div key={i}>{`${rule.lhs} ${rule.bidirectional ? "<" : ""}=> ${
          rule.rhs
        }`}</div>
      ))}
    </div>
  );
}
