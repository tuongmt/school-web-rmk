// PostPage.tsx
"use client";

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Post {
  id: string;
  language: string;
  image: string;
  title: string;
  content: string;
  category: string;
  isActive: boolean;
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  const handleCreatePost = () => {
    router.push("/editor");
  };
  const handleEditPost = (id: string) => {
    const postToEdit = posts.find((post) => post.id === id);
    if (postToEdit) {
      localStorage.setItem("postToEdit", JSON.stringify(postToEdit)); // Lưu document vào localStorage
      router.push("/editor");
    }
  };
  const handleDeletePost = (id: string) => {
    const updatedDocuments = posts.filter((doc) => doc.id !== id);
    setPosts(updatedDocuments);
    localStorage.setItem("posts", JSON.stringify(updatedDocuments));
    toast.success("Post deleted successfully!");
  };
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(storedPosts);
  }, []);

  return (
    <div className="container mx-auto p-4 h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Quản lý Bài viết
      </h1>
      <div className="flex justify-end mb-2">
        <Button onClick={handleCreatePost} className="bg-blue-500 text-white">
          Tạo Bài viết
        </Button>
      </div>

      {/* Hiển thị bảng bài viết */}
      <div style={{ height: "calc(100vh - 235px)", overflowY: "auto" }}>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Language</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Is Active</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-100">
                {" "}
                {/* Sử dụng ID */}
                <td className="py-2 px-4 border-b">{post.language}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="py-2 px-4 border-b">{post.title}</td>
                <td className="py-2 px-4 border-b">{post.category}</td>
                <td className="py-2 px-4 border-b">
                  {post.isActive ? "Yes" : "No"}
                </td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <Button
                    onClick={() => handleEditPost(post.id)}
                    className="bg-yellow-500 text-white"
                  >
                    Sửa
                  </Button>
                  <Button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-500 text-white"
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}
