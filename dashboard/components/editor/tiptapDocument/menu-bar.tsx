import { Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaLink,
  FaCode,
  FaQuoteLeft,
  FaEraser,
  FaHtml5,
} from "react-icons/fa";

interface MenuBarProps {
  editor: Editor | null;
  className?: string;
}

export default function MenuBar({ editor, className }: MenuBarProps) {
  if (!editor) return null;

  const headingLevels: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 2, 3, 4, 5, 6];

  const handleLinkInsert = () => {
    const url = window.prompt("Enter the URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div
      className={`flex flex-wrap space-x-2 p-4 bg-white rounded-lg shadow-md border border-gray-200 ${className}`}
    >
      {/* Text Formatting */}
      <div className="flex space-x-1">
        <button
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-2 border rounded ${editor.isActive("bold") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Bold"
        >
          <FaBold />
        </button>
        <button
          title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-2 border rounded ${editor.isActive("italic") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Italic"
        >
          <FaItalic />
        </button>
        <button
          title="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={`px-3 py-2 border rounded ${editor.isActive("underline") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Underline"
        >
          <FaUnderline />
        </button>
        <button
          title="Strike"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`px-3 py-2 border rounded ${editor.isActive("strike") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Strikethrough"
        >
          <FaStrikethrough />
        </button>
      </div>

      {/* Headings */}
      <div className="flex space-x-1">
        <select
          onChange={(event) => {
            const level = Number(event.target.value) as 1 | 2 | 3 | 4 | 5 | 6;
            if (level) {
              editor.chain().focus().toggleHeading({ level }).run();
            } else {
              editor.chain().focus().setParagraph().run();
            }
          }}
          className="px-3 py-2 border rounded text-gray-600"
          defaultValue=""
        >
          <option value="">Normal</option>
          {headingLevels.map((level) => (
            <option key={level} value={level}>
              Heading {level}
            </option>
          ))}
        </select>
      </div>

      {/* Paragraph and Lists */}
      <div className="flex space-x-1">
        <button
          title="Paragraph"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`px-3 py-2 border rounded ${editor.isActive("paragraph") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Paragraph"
        >
          <FaHtml5 />
        </button>

        <button
          title="Bullet List"
          onClick={() => {
            editor.chain().focus().toggleBulletList().run();
          }}
          className={`px-3 py-2 border rounded ${editor.isActive("bulletList") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Bullet List"
        >
          <FaListUl />
        </button>

        <button
          title="Ordered List"
          onClick={() => {
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={`px-3 py-2 border rounded ${editor.isActive("orderedList") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Ordered List"
        >
          <FaListOl />
        </button>
      </div>
      {/* Alignment */}
      <div className="flex space-x-1">
        <button
          title="Align Left"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`px-3 py-2 border rounded ${editor.isActive({ textAlign: "left" }) ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Align Left"
        >
          <FaAlignLeft />
        </button>
        <button
          title="Align Center"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`px-3 py-2 border rounded ${editor.isActive({ textAlign: "center" }) ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Align Center"
        >
          <FaAlignCenter />
        </button>
        <button
          title="Align Right"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`px-3 py-2 border rounded ${editor.isActive({ textAlign: "right" }) ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Align Right"
        >
          <FaAlignRight />
        </button>
        <button
          title="Justify"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={`px-3 py-2 border rounded ${editor.isActive({ textAlign: "justify" }) ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Justify"
        >
          <FaAlignJustify />
        </button>
      </div>

      {/* Links, Code, Blockquote */}
      <div className="flex space-x-1">
        <button
          title="Insert Link"
          onClick={handleLinkInsert}
          disabled={!editor.can().chain().focus().setLink({ href: "" }).run()}
          className={`px-3 py-2 border rounded ${editor.isActive("link") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Insert Link"
        >
          <FaLink />
        </button>
        <button
          title="Code Block"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-3 py-2 border rounded ${editor.isActive("codeBlock") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Code Block"
        >
          <FaCode />
        </button>
        <button
          title="Blockquote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-2 border rounded ${editor.isActive("blockquote") ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-blue-100"}`}
          aria-label="Blockquote"
        >
          <FaQuoteLeft />
        </button>
      </div>

      <div className="flex space-x-1">
        <button
          title="Clear Formatting"
          onClick={() => editor.chain().focus().clearNodes().run()}
          className="px-3 py-2 border rounded text-gray-600 hover:bg-red-100"
          aria-label="Clear Formatting"
        >
          <FaEraser />
        </button>
      </div>
    </div>
  );
}
