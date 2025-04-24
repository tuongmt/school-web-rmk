"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, FolderOpen } from "lucide-react";
import TableAction from "@/components/table-action/table-action";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LocalTime } from "@/components/time/local-time";
import { IForm } from "@/interfaces/form";

export const formColumns: ColumnDef<IForm>[] = [
  {
    id: "index",
    header: "STT",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <span>Tiêu đề</span>
          <Button
            className="px-0 font-normal outline-none bg-transparent shadow-none text-black"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "content",
    header: "Nội dung",
    cell: ({ getValue }) => {
      const url = getValue() as string;
      return (
        <Link
          className="flex items-center gap-2"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FolderOpen className="w-4 h-4" />
          Xem tài liệu{" "}
        </Link>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Danh mục",
  },
  {
    accessorKey: "isActive",
    header: "Trạng thái",
    cell: ({ getValue }) => {
      const isActive = getValue();
      return (
        <span
          className={`py-2 px-4 text-white rounded-lg ${isActive ? "bg-green-600" : "bg-red-600"}`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Ngày cập nhật",
    cell: (props) => {
      const initialDate = new Date(props.getValue() as Date);
      return <LocalTime date={initialDate} />;
    },
    filterFn: (rows, id, filterValue) => {
      const postedDate = new Date(rows.getValue(id) as Date);
      const comparedDate = new Date(filterValue as Date);

      // Đặt giờ, phút, giây và mili giây về 0 để chỉ so sánh ngày
      postedDate.setHours(0, 0, 0, 0);
      comparedDate.setHours(0, 0, 0, 0);

      return postedDate.getTime() === comparedDate.getTime();
    },
  },
  {
    id: "actions",
    cell: ({ getValue }) => {
      const formId = getValue() as string;

      return <TableAction formId={formId} />;
    },
  },
];
