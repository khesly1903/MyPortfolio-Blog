import "../styles/bubble-menu.css";

import React from "react";

import TiptapBubbleMenu from "./tiptap-components/TiptapBubbleMenu";
import { EditorContent, useEditor } from "@tiptap/react";

import tiptapMarkExtensions from "../extensions/tiptapMarkExtensions";
import TiptapFloatMenu from "./tiptap-components/TiptapFloatMenu";

const Editor = () => {
  const editor = useEditor({
    
    extensions: [...tiptapMarkExtensions,

    ],
    
    content: `
      <p>
        Hey, try to select some text here. There will popup a menu for selecting some inline styles.
        
        Remember: you have full control about content and styling of this menu.
      </p>
    `,
    
    shouldRerenderOnTransaction: true,
    immediatelyRender: true,
  });

  return (
    <>
      <TiptapBubbleMenu editor={editor} />
      <TiptapFloatMenu editor={editor} />
      <EditorContent
        editor={editor}
        style={{ fontSize: "1.5rem", fontFamily: "Comic Sans MS, cursive" }}
      />
    </>
  );
};

export default Editor;
