import React, { useState } from "react";
import documents from "./documents.json";
import DropdownList from "./DropdownList";
import RenderMarkdown from "./RenderMarkdown";
import SelectedDocument from "./SelectedDocument";

const App = () => {
  const [selectedDoc, setSelectedDoc] = useState("None");

  const handleSelection = (event) => {
    setSelectedDoc(event.target.value);
  };

  return (
    <main>
      <DropdownList elements={documents} onchange={handleSelection} />
      <SelectedDocument document={selectedDoc} />
      <RenderMarkdown render={selectedDoc}></RenderMarkdown>
    </main>
  );
};

export default App;
