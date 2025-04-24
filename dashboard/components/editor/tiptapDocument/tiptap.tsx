"use client";

import React, { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import OrderedList from "@tiptap/extension-ordered-list";
import MenuBar from "./menu-bar";
import Select, { MultiValue } from "react-select";
import { Languages } from "@/constants/languages";
import { useRouter } from "next/navigation";

const languages = Object.values(Languages);
const tagOptions = ["Tag1", "Tag2", "Tag3"];

interface TipTapEditorProps {
  onSubmit: (data: {
    title: string;
    language: string;
    tags: string[];
    content: string;
  }) => void;
  initialData?: {
    title: string;
    language: string;
    tags: string[];
    content: string;
  } | null;
}

export default function TipTapEditor({
  onSubmit,
  initialData,
}: TipTapEditorProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [language, setLanguage] = useState<string>(initialData?.language || "");
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [content, setContent] = useState(initialData?.content || "");
  const router = useRouter();

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "border min-h-70 max-h-70 overflow-y-auto p-4 rounded-lg",
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
      setLanguage(initialData.language);
      setTags(initialData.tags);
      setContent(initialData.content);
      editor?.commands.setContent(initialData.content);
    }
  }, [initialData, editor]);
  const handleTagChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>,
  ) => {
    if (selectedOptions) {
      setTags(selectedOptions.map((option) => option.value));
    }
  };

  // Cập nhật phần handleSubmit trong Editor
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postData = {
      title,
      language,
      tags,
      content,
    };

    onSubmit(postData);
    router.push("/dashboard/post");
  };

  const LanguageSelect = () => {
    return (
      <Select
        value={language ? { value: language, label: language } : null}
        onChange={(selected) => setLanguage(selected?.value || "")}
        options={languages.map((lang) => ({ value: lang, label: lang }))}
        isSearchable
        placeholder="Chọn ngôn ngữ"
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
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Ngôn ngữ:
            <LanguageSelect />
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">
            Tags:
            <Select
              isMulti
              options={tagOptions.map((tag) => ({ value: tag, label: tag }))}
              onChange={handleTagChange}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Chọn tag"
            />
            <p className="text-sm text-gray-500">Chọn tags cho bài viết</p>
          </label>
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
