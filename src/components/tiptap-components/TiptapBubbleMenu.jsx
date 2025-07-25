import React from 'react'

import "../../styles/bubble-menu.css"

import { BubbleMenu } from "@tiptap/react/menus";

import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  HighlightOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";


export default function TiptapBubbleMenu({editor}) {

  const toggleHeadingLevel = () => {
    if (editor.isActive("heading", { level: 1 })) {
      editor.chain().focus().toggleHeading({ level: 2 }).run();
    } else if (editor.isActive("heading", { level: 2 })) {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().toggleHeading({ level: 1 }).run();
    }
  };

  if (!editor) return null
  return (
    <BubbleMenu
          editor={editor}
          tippyoptions={{ placement: "top",offset: 8 }}
        >
          <div className="bubble-menu">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
              type="button"
            >
              <BoldOutlined />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : ""}
              type="button"
            >
              <ItalicOutlined />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "is-active" : ""}
            >
              <UnderlineOutlined />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              className={editor.isActive("highlight") ? "is-active" : ""}
            >
              <HighlightOutlined />
            </button>

            <button
              onClick={toggleHeadingLevel}
              className={
                editor.isActive("heading", { level: 1 }) ||
                editor.isActive("heading", { level: 2 })
                  ? "is-active"
                  : ""
              }
              type="button"
            >
              <FontSizeOutlined />
            </button>
          </div>
        </BubbleMenu>
  )
}
