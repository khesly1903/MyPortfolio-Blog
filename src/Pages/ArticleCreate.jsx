import React from "react";
import Editor from "../components/editor";

export default function ArticleCreate() {
  return (
    <div
      className="center-flex"
      style={{ maxWidth: "80%", margin: "2rem auto", padding: "2rem" }}
    >
      <Editor />
    </div>
  );
}
