"use client";

import Image from "next/image";

import { ColumnDef } from "@tanstack/react-table";

import { compareAsc } from "date-fns";

import defaultImg from "@/public/images/vlsc.jpg";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocalTime } from "@/components/time/local-time";
import { Button } from "@/components/ui/button";
import { LucidePencil, LucideTrash2, MoreHorizontal } from "lucide-react";

import { IPost, ICategory, ILanguage } from "@/interfaces/post";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const postColumns: ColumnDef<IPost>[] = [
  {
    accessorKey: "thumbnail",
    header: "Hình bài viết",
    cell: (props) => {
      return (
        <Link
          href={(props.getValue() as string) ?? "images/vlsc.jpg"}
          target="_blank"
        >
          <Image
            src={(props.getValue() as string) ?? defaultImg}
            alt={""}
            height={80}
            width={0}
          />
        </Link>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Tiêu đề",
    cell: (props) => {
      return (
        <Link
          href={`posts/${props.row.original.id}`}
          className="inline-block min-w-28 text-blue-500 hover:underline font-bold"
        >
          <span>{props.getValue() as string}</span>
        </Link>
      );
    },
  },
  { accessorKey: "author", header: "Tác giả" },
  {
    accessorKey: "tags",
    header: "Từ khoá",
    cell: (props) => {
      const tags = props.row.original.tags as Array<string>;
      return tags.join(", ");
    },
  },
  {
    accessorKey: "category",
    header: "Danh mục",
    cell: (props) => {
      return (props.getValue() as ICategory).name;
    },
  },
  {
    accessorKey: "language",
    header: "Ngôn ngữ",
    cell: (props) => {
      return (
        <span className="inline-block min-w-14">
          {(props.getValue() as ILanguage).name}
        </span>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: "Hiển thị bài viết",
    cell: (props) => {
      return props.getValue() === false ? (
        <span className="inline-block min-w-20">Công khai</span>
      ) : (
        <span className="inline-block min-w-20">Chưa công khai</span>
      );
    },
  },
  {
    accessorKey: "postDate",
    header: "Ngày cập nhật bài viết",
    cell: (props) => {
      const initialDate =
        props.row.original.createdAt.getTime() ===
        props.row.original.updatedAt.getTime()
          ? props.row.original.createdAt
          : props.row.original.updatedAt;

      return (
        <>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="underline underline-offset-2 decoration-dotted">
                <LocalTime date={initialDate} />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Ngày đăng bài:{" "}
                  <LocalTime date={props.row.original.createdAt} />
                </p>
                <p>
                  Ngày cập nhật:{" "}
                  <LocalTime date={props.row.original.updatedAt} />
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      );
    },
  },
  {
    id: "actions",
    cell: (props) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex justify-center items-center">
              <Button variant="ghost" size={"icon"}>
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`posts/edit/${props.row.original.id}`}>
              <DropdownMenuItem>
                <LucidePencil />
                <span>Sửa</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <LucideTrash2 />
              <span>Xoá</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
