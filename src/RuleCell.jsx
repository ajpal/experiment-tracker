import React, { useState } from "react";

import RuleList from "./RuleList";

export default function RuleCell(props) {
  const { filename } = props;

  const [isOpen, setIsOpen] = useState(false);
  const icon = isOpen ? "fa fa-angle-down" : "fa fa-angle-right";

  return (
    <div>
      {filename}
      <i
        onClick={() => setIsOpen(!isOpen)}
        style={styles.icon}
        className={icon}
      ></i>
      {isOpen && <RuleList filename={filename} />}
    </div>
  );
}

const styles = {
  icon: {
    margin: "0px 5px",
    cursor: "pointer",
    fontSize: "large",
  },
};
