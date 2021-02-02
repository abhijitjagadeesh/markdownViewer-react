import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const RenderMarkdown = ({ render }) => {
  const [data, setData] = useState("");

  fetch("markdownviewer-react/documents/" + render + ".md")
    .then((response) => response.text())
    .then((text) => {
      if (render !== "None" && render !== "Select a document") {
        setData(text);
      } else {
        setData("");
      }
    });

  return <ReactMarkdown source={data} escapeHtml={false} />;
};

export default RenderMarkdown;
