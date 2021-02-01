import React from "react";

const SelectedDocument = ({ document }) => {
  let documentName = "";
  let editingDocument = "";
  if (document !== "Select a document" && document !== "None") {
    documentName = document;
    editingDocument = "Viewing document:";
  }
  return (
    <div className="custom-select ">
      {editingDocument} {documentName}
    </div>
  );
};

export default SelectedDocument;
