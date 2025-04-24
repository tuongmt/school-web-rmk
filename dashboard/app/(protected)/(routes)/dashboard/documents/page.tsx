// DocumentEditorPage.jsx
"use client";
import { v4 as uuidv4 } from "uuid";
import DocumentEditor from "@/components/admin/documents/DocumentsForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DocumentEditorPage() {
  const router = useRouter();
  const [editingDocument, setEditingDocument] = useState<{
    id: string;
    title: string;
    type: string;
    content: string;
    status: string;
  } | null>(null);

  useEffect(() => {
    const documentToEdit = JSON.parse(
      localStorage.getItem("documentToEdit") || "null",
    );
    if (documentToEdit) {
      setEditingDocument(documentToEdit); // Lấy document từ localStorage
      localStorage.removeItem("documentToEdit"); // Xóa sau khi lấy để tránh tình trạng luôn điền sẵn dữ liệu
    }
  }, []);

  const handleSave = (documentData: {
    title: string;
    type: string;
    content: string;
  }) => {
    const existingDocuments = JSON.parse(
      localStorage.getItem("documents") || "[]",
    );

    if (editingDocument) {
      const updatedDocuments = existingDocuments.map((doc: { id: string }) =>
        doc.id === editingDocument.id ? { ...doc, ...documentData } : doc,
      );
      localStorage.setItem("documents", JSON.stringify(updatedDocuments));
    } else {
      const newPost = {
        id: uuidv4(),
        ...documentData,
      };
      existingDocuments.unshift(newPost);
      localStorage.setItem("documents", JSON.stringify(existingDocuments));
    }

    router.push("/dashboard/managementDocument");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        {editingDocument ? "Chỉnh sửa Văn bản" : "Thêm Văn bản mới"}
      </h1>
      <DocumentEditor onSubmit={handleSave} initialData={editingDocument} />
    </div>
  );
}
