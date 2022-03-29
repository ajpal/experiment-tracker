import React from "react";
import "./App.css";

import ExperimentTable from "./ExperimentTable";
import UploadButton from "./UploadButton";

export default function App() {
  return (
    <div className="App">
      <h1>Experiments</h1>
      <UploadButton />
      <ExperimentTable />
    </div>
  );
}
