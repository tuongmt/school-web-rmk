"use client";
import PaginationComponent from "@/components/pagination/pagination-component";
import TableAction from "@/components/table-action/table-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IForm } from "@/constants/interface";
import { useQuery } from "@tanstack/react-query";
import { FolderOpen, Plus, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ManageTrainingPrograms = () => {
  const [searchTerm, setSearchTerm] = React.useState(""); // State cho ô tìm kiếm
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: session } = useSession(); // Access session data
  const token = session?.accessToken; // Get accessToken from session

  const formsPerPage = 10;
  const indexOfLastForm = currentPage * formsPerPage;
  const indexOfFirstForm = indexOfLastForm - formsPerPage;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  };

  const endpoint = "forms";
  const {
    isPending,
    error,
    data: queryRes,
  } = useQuery({
    queryKey: ["forms", currentPage], // Thêm searchTerm vào queryKey
    queryFn: async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/form/${endpoint}?page=${currentPage}`,
          {
            method: "GET",
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status >= 200) return response.json();
      } catch (error) {
        return error;
      }
    },
  });
  // Hàm xử lý tìm kiếm và lọc dữ liệu
  const handleSearch = () => {
    setCurrentPage(1); // Đặt lại trang về 1 sau khi tìm kiếm/lọc
  };

  // Đang lấy dữ liệu
  if (isPending) return <span>Fetching...</span>;
  // Nếu có lỗi
  if (error) return <span>{queryRes}</span>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search className="w-5 h-5 text-muted-foreground" />
            </span>
            <Input
              className="w-80 rounded-sm pl-8"
              placeholder="Tìm kiếm theo tiêu đề"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật giá trị input
            />
          </div>
          <Button className="bg-sky-600 text-white" onClick={handleSearch}>
            Tìm kiếm
          </Button>
        </div>
        <Button className="flex gap-1 bg-green-600 text-white">
          <Plus className="w-4 h-4" />
          Thêm
        </Button>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableCaption>
            <div className="flex items-center gap-3">
              <span className="font-bold">Danh sách biểu mẫu</span>
              <span>(Hiện có {queryRes.itemsCount} biểu mẫu)</span>
            </div>
          </TableCaption>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pr-0"></TableHead>
              <TableHead>Tiêu đề</TableHead>
              <TableHead>Nội dung</TableHead>
              <TableHead>Danh mục</TableHead>
              <TableHead>Thời gian tạo</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className="text-right bg-white dark:bg-[hsl(0,0%,3.9%)] box-border sticky right-0"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(queryRes.data as any[]??[]).map((data, index) => (
              <TableRow key={data.id}>
                <TableCell className="pr-0">{index + 1}</TableCell>
                <TableCell className="min-w-[200px]">{data.title}</TableCell>
                <TableCell className="min-w-[200px]">
                  <Link
                    className="flex items-center gap-2"
                    href={data.content}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FolderOpen className="w-4 h-4" />
                    Xem tài liệu
                  </Link>
                </TableCell>
                <TableCell className="min-w-[200px]">{data.type}</TableCell>
                <TableCell className="min-w-[200px]">
                  {new Date(data.updatedAt).toLocaleString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </TableCell>
                <TableCell className="min-w-[200px]">
                  <span
                    className={`py-2 px-4 text-white rounded-lg ${data.isActive ? "bg-green-600" : "bg-red-600"}`}
                  >
                    {data.isActive ? "Active" : "Inactive"}
                  </span>
                </TableCell>
                <TableCell className="text-center bg-white dark:bg-[hsl(0,0%,3.9%)] sticky right-0">
                  <div className="border-l-2"></div>
                  <TableAction formId={data.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableCaption className="caption-bottom">
            <div className="w-full flex items-center justify-between">
              <div className="w-fit">
                <span>Tổng {queryRes.totalPages} trang</span>
              </div>
              <PaginationComponent
                currentPage={currentPage}
                totalPages={queryRes.totalPages}
                onPageChange={handlePageChange}
              />
              <div className="text-left">
                <span>
                  Từ dòng {indexOfFirstForm + 1} đến{" "}
                  {Math.min(indexOfLastForm, queryRes.itemsCount)}
                </span>
              </div>
            </div>
          </TableCaption>
        </Table>
      </div>
    </div>
  );
};

export default ManageTrainingPrograms;
