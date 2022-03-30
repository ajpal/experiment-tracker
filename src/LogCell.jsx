import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";

export default function LogCell(props) {
  const { filename } = props;

  const [isOpen, setIsOpen] = useState(false);

  function getLogContent() {
    if (!isOpen) {
      return "";
    }
    const logData = require(`./data/raw/${filename.split(".")[0]}.js`);
    return logData.log;
  }

  return (
    <div>
      <button style={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {filename}
      </button>
      <Modal show={isOpen} onHide={() => setIsOpen(false)} animation={false}>
        <Modal.Body>{getLogContent()}</Modal.Body>
      </Modal>
    </div>
  );
}

const styles = {
  // style button as link
  button: {
    border: "none",
    padding: 0,
    color: "#0d6efd",
    textDecoration: "underline",
    cursor: "pointer",
    backgroundColor: "white",
    fontSize: "inherit",
  },
};
