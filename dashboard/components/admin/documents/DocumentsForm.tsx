import React, { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import OrderedList from "@tiptap/extension-ordered-list";
import Select, { SingleValue } from "react-select";
import { useRouter } from "next/navigation";
import MenuBar from "@/components/editor/tiptapDocument/menu-bar";

const types = ["Document", "Policy"];
const selectStatus = ["Active", "InActive"];
interface TipTapEditorProps {
  onSubmit: (data: {
    title: string;
    type: string;
    content: string;
    status: string;
  }) => void;
  initialData?: {
    title: string;
    type: string;
    content: string;
    status: string;
  } | null;
}

export default function DocumentEditor({
  onSubmit,
  initialData,
}: TipTapEditorProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [type, setType] = useState<string>(initialData?.type || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [status, setStatus] = useState(initialData?.status || "");
  const [errors, setErrors] = useState({ title: "", type: "", status: "" });
  const router = useRouter();

  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "border min-h-[200px] max-h-[300px] overflow-y-auto p-4 rounded-lg",
      },
    },
    extensions: [
      StarterKit,
      Underline,
      Link,
      OrderedList,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: initialData?.content || "<p>Hello World!</p>",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setType(initialData.type);
      setContent(initialData.content);
      setStatus(initialData.status);
      editor?.commands.setContent(initialData.content);
    }
  }, [initialData, editor]);

  const validateForm = () => {
    const newErrors: { title: string; type: string; status: string } = {
      title: "",
      type: "",
      status: "",
    };
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = "Tiêu đề không được để trống";
      isValid = false;
    }
    if (!type) {
      newErrors.type = "Vui lòng chọn thể loại!";
      isValid = false;
    }
    if (!status) {
      newErrors.status = "Vui lòng chọn trạng thái!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      const documentData = {
        title,
        type,
        content,
        status,
      };
      onSubmit(documentData);
      router.push("/dashboard/managementDocument");
    }
  };

  const TypeSelect = () => {
    return (
      <Select
        value={type ? { value: type, label: type } : null}
        onChange={(selected: SingleValue<{ value: string; label: string }>) =>
          setType(selected?.value || "")
        }
        options={types.map((type) => ({ value: type, label: type }))}
        isSearchable
        placeholder="Chọn thể loại"
      />
    );
  };
  const StatusSelect = () => {
    return (
      <Select
        value={status ? { value: status, label: status } : null}
        onChange={(selected: SingleValue<{ value: string; label: string }>) =>
          setStatus(selected?.value || "")
        }
        options={selectStatus.map((status) => ({
          value: status,
          label: status,
        }))}
        isSearchable
        placeholder="Chọn trạng thái"
      />
    );
  };

  return (
    <div className="flex flex-col p-6 h-full overflow-y-auto bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Tiêu đề:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Thể loại:
            <TypeSelect />
          </label>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Trạng thái:
            <StatusSelect />
          </label>
          {errors.status && (
            <p className="text-red-500 text-sm">{errors.status}</p>
          )}
        </div>

        <MenuBar editor={editor} />
        <EditorContent editor={editor} />

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Gửi
        </button>
      </form>
    </div>
  );
}
