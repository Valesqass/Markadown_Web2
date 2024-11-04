import React, { useState } from "react";
import Showdown from "showdown";
import "./Editor.css";
import homePage from "../assets/homepage-0.svg";
import { Link } from "react-router-dom";
import closeIcon from "../assets/Close.svg";
import maximiseIcon from "../assets/Maximize.svg";
import minimiseIcon from "../assets/Minimize.svg";

// html convertion
const converter = new Showdown.Converter();

function Editor() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [fileName, setFileName] = useState("file-name"); // default name

  // handling file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setMarkdownContent(e.target.result);
    };
    if (file) reader.readAsText(file);
  };

  // handlid file export
  const exportToMarkdown = (content, fileName) => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `${fileName}.md`;
    a.click();

    window.URL.revokeObjectURL(url);
  };

  const handleFileExport = () => {
    exportToMarkdown(markdownContent, fileName || "file-name");
  };

  const previewHTML = converter.makeHtml(markdownContent);

  return (
    <div className="markdown-manager">
      <div className="Editorbanner">
        <h3>Markdown Editor</h3>
        <div>
          <img src={minimiseIcon} alt="" />
          <img src={maximiseIcon} alt="" />
          <img src={closeIcon} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="editor-section">
          <textarea
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            rows="20"
            placeholder="Écrivez votre Markdown ici..."
          />
        </div>
        <div className="preview-section">
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: previewHTML }}
          />
        </div>
        <div className="sidebar">
          <input
            type="file"
            accept=".md"
            onChange={handleFileUpload}
            className="file-input"
          />
          <input
            type="text"
            placeholder="Nom du fichier"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="file-name-input"
          />
          <button onClick={handleFileExport} className="export-button">
            Export markdown file
          </button>
          <Link to="/">
            <button className="home">
              <img src={homePage} alt="" />
              <h2>Back to homepage</h2>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Editor;
