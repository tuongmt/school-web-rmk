// components/ForgotPassPage.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { IconLanguage, IconSun } from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ForgotPassPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email) {
      alert("Vui lòng nhập đầy đủ tên đăng nhập và email.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/forget-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email }),
        },
      );

      if (response.status === 404) {
        toast.warning("Không tìm thấy User");
        return;
      }

      const data = await response.json();

      if (response.ok) {
        toast.success("Gửi thành công");
      } else {
        toast.error("Gửi thất bại");
      }
    } catch (error) {
      console.error("Lỗi gửi yêu cầu:", error);
      alert("Không thể gửi yêu cầu reset mật khẩu.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full md:w-3/4 gap-5 md:gap-10">
      <div className="flex flex-col w-full text-center gap-2 md:gap-3">
        <div className="relative flex justify-center items-center">
          <h1 className="text-base font-bold md:text-2xl">Quên mật khẩu</h1>
          <div className="absolute flex gap-2 right-0 text-blue-600">
            <button
              className="flex items-center justify-center size-6 md:size-8"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <IconSun size={16} className="md:size-18 dark:text-white" />
            </button>
            <button className="flex items-center justify-center size-6 md:size-8">
              <IconLanguage size={16} className="md:size-18 dark:text-white" />
            </button>
          </div>
        </div>
        <span className="text-red-600">
          Hệ thống sẽ gửi link reset mật khẩu về email trường cấp cho bạn.
        </span>
      </div>
      <form
        className="flex flex-col w-full gap-2 md:gap-3"
        onSubmit={handleResetPassword}
      >
        <div className="flex flex-col gap-1 mb-2">
          <label
            htmlFor="username"
            className="text-sm md:text-base font-semibold"
          >
            Tên đăng nhập: <span className="text-red-600">*</span>
          </label>
          <input
            type="username"
            id="username"
            placeholder="Nhập tên đăng nhập"
            className="py-1.5 px-2 border rounded-sm outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="email" className="text-sm md:text-base font-semibold">
            Email trường cấp: <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Nhập email"
            className="py-1.5 px-2 border rounded-sm outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded"
        >
          Gửi yêu cầu đặt lại mật khẩu
        </Button>
        <Link
          href="/auth/login"
          className="ml-2 text-xs md:text-sm font-semibold text-blue-600 text-center dark:text-white"
        >
          Quay lại
        </Link>
      </form>
    </div>
  );
}
