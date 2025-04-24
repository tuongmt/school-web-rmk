import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import ImageResize from "tiptap-extension-resize-image";

import TiptapMenuBar from "./menu-bar";

export default function TiptapEditor({
  defaultValue,
  onValueChange,
  onCallback,
}: {
  defaultValue: string;
  onValueChange: (arg0: string) => void;
  onCallback?: React.ReactNode;
}) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "border-l border-r border-b border-input shadow-sm rounded-b-md focus:ring-1 focus:ring-ring outline-none p-2 px-3",
      },
    },
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2],
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      ImageResize,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: defaultValue,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onValueChange(editor.getHTML());
    },
  });

  return (
    <>
      <TiptapMenuBar editor={editor} onCallback={onCallback} />
      <EditorContent editor={editor} />
    </>
  );
}
