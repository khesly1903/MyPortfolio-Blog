import React, { useCallback } from "react";
import "../../styles/float-menu.css";
import "prosemirror-view/style/prosemirror.css";

import {
  CodeOutlined,
  LinkOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";

export default function TiptapFloatMenu({ editor }) {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    try {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    } catch (e) {
      alert(e.message);
    }
  }, [editor]);

  return (
    <div className="float-menu center-flex">
      <button
        onClick={() => editor.chain().focus().setCodeBlock().run()}
        disabled={editor.isActive("codeBlock")}
      >
        <CodeOutlined />
      </button>

      <button
        onClick={setLink}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        <LinkOutlined />
      </button>

      <button
        onClick={() => editor.chain().focus().setSubscript().run()}
        disabled={editor.isActive("subscript")}
      >
        <div>
          x<sub>2</sub>
        </div>
      </button>

      <button
        onClick={() => editor.chain().focus().setSuperscript().run()}
        disabled={editor.isActive("superscript")}
      >
        <div>
          x<sup>2</sup>
        </div>
      </button>

      <div className="seperator"></div>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        •
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        1.
      </button>

      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        Set horizontal rule
      </button>
    </div>
  );
}
