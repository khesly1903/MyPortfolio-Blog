import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";


const extensions = [
  StarterKit,
  Highlight.configure({
    HTMLAttributes: {
      class: "bubble-menu-highlight",
    },
  }),
];

export default extensions;