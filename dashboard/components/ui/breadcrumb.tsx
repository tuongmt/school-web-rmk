"use client";

import { IconChevronRight } from "@tabler/icons-react";
import { link } from "fs";
import { title } from "process";
import React from "react";

type BreadCrumbType = {
  title: string;
  link: string;
};

export type BreadCrumbPropsType = {
  items: BreadCrumbType[];
};
export default function BreadCrumb({ items }: BreadCrumbPropsType) {
  return (
    <div className="flex flex-col items-start p-0">
      <h1 className="text-base font-semibold text-black dark:text-white">
        ĐỐI TÁC
      </h1>
      <div className="flex items-center text-gray-400 text-sx dark:text-white ">
        <span>Chung</span>
        <IconChevronRight size={21} className="mt-1" />
        <span className="font-semibold text-black dark:text-white">
          Đối tác
        </span>
      </div>
    </div>
  );
}
