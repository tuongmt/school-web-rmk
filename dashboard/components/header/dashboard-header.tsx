"use client";
import Avatar from "@/components/ui/avatar";
import BreadCrumb from "@/components/ui/breadcrumb";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import LocaleSwitcher from "../language/locale-switcher";
import { Separator } from "../ui/separator";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="border-b border-l bg-neutral-100 dark:bg-neutral-800 w-full">
      <nav className="flex h-full items-center sm:justify-between justify-end px-6 py-3 gap-2">
        <div className="flex-grow hidden sm:block items-center">
          <BreadCrumb items={[]} />
        </div>

        <button
          className="p-2 rounded hover:bg-neutral-300 hover:text-black"
          onClick={toggleTheme}
        >
          <Sun />
        </button>
        <div className="w-32 sm:w-40">
          <LocaleSwitcher />
        </div>

        <Separator orientation="vertical" />
        <Avatar />
      </nav>
    </header>
  );
};

export default Header;
