import React, { useState } from "react";
import ProfileDialog from "@/components/ui/profiles";
import { signOut } from "next-auth/react";

export default function Avatar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    setIsProfileDialogOpen(true);
  };
  const handleSignOut = () => {
    signOut();
  };

  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Avatar */}
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
          TA
        </div>
        <div className="hidden sm:block">
          <div className="text-sx font-semibold">Nguyễn Tuấn Anh</div>
          <div className="text-gray-500">Nhân viên</div>
        </div>
      </div>
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <ul className="py-2">
            <li
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-black dark:text-white"
              onClick={handleProfileClick}
            >
              Thông tin cá nhân
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-black dark:text-white">
              Cài đặt
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-black dark:text-white" onClick={handleSignOut}>
              Đăng xuất
            </li>
          </ul>
        </div>
      )}
      {/* Profile Dialog */}
      <ProfileDialog
        isOpen={isProfileDialogOpen}
        onClose={() => setIsProfileDialogOpen(false)}
      />
    </div>
  );
}
