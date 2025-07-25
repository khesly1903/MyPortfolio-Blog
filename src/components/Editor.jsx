import "../styles/bubble-menu.css";

import React from "react";

import TiptapBubbleMenu from "./tiptap-components/TiptapBubbleMenu";
import { EditorContent, useEditor } from "@tiptap/react";

import tiptapMarkExtensions from "../extensions/tiptapMarkExtensions"

const Editor = () => {
  const editor = useEditor({
    extensions:tiptapMarkExtensions,
    content: `
      <p>
        Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
      </p>
    `,
    shouldRerenderOnTransaction: true,
    immediatelyRender: true,
  });

  

  return (
    <>
      {editor && (
        <TiptapBubbleMenu editor={editor} />
      )}
      <EditorContent editor={editor} className="editor-content" />
    </>
  );
};

export default Editor;
