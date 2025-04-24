"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FolderOpen, Plus, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import PaginationComponent from "@/components/pagination/pagination-component";
import TableAction from "@/components/table-action/table-action-recruitment";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import FormPopUp from "@/components/form-pop-up/job-form-pop-up";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { applications } from "./applications/page";

export const jobs = [
  {
    no: "1",
    job: "Giảng viên Khoa CNTT",
    postlink: "#",
    needing: 10,
    current: 12,
    approved: 2,
    declined: 3,
  },
  {
    no: "2",
    job: "Chuyên viên Marketing",
    postlink: "#",
    needing: 5,
    current: 3,
    approved: 1,
    declined: 1,
  },
  {
    no: "3",
    job: "Trưởng phòng Nhân sự",
    postlink: "#",
    needing: 2,
    current: 1,
    approved: 0,
    declined: 1,
  },
  {
    no: "4",
    job: "Kế toán",
    postlink: "#",
    needing: 4,
    current: 5,
    approved: 2,
    declined: 2,
  },
  {
    no: "5",
    job: "Lập trình viên Frontend",
    postlink: "#",
    needing: 8,
    current: 6,
    approved: 4,
    declined: 1,
  },
  {
    no: "6",
    job: "Lập trình viên Backend",
    postlink: "#",
    needing: 7,
    current: 5,
    approved: 3,
    declined: 0,
  },
  {
    no: "7",
    job: "Nhân viên Thiết kế Đồ họa",
    postlink: "#",
    needing: 3,
    current: 4,
    approved: 2,
    declined: 1,
  },
  {
    no: "8",
    job: "Chuyên viên SEO",
    postlink: "#",
    needing: 4,
    current: 4,
    approved: 3,
    declined: 0,
  },
  {
    no: "9",
    job: "Nhân viên Bán hàng",
    postlink: "#",
    needing: 15,
    current: 10,
    approved: 6,
    declined: 4,
  },
  {
    no: "10",
    job: "Chuyên viên Phân tích Dữ liệu",
    postlink: "#",
    needing: 6,
    current: 7,
    approved: 5,
    declined: 1,
  },
  {
    no: "11",
    job: "Nhân viên CSKH",
    postlink: "#",
    needing: 5,
    current: 5,
    approved: 2,
    declined: 2,
  },
  {
    no: "12",
    job: "Trợ lý Giám đốc",
    postlink: "#",
    needing: 1,
    current: 1,
    approved: 0,
    declined: 1,
  },
  {
    no: "13",
    job: "Nhân viên Tổ chức Sự kiện",
    postlink: "#",
    needing: 6,
    current: 4,
    approved: 1,
    declined: 2,
  },
  {
    no: "14",
    job: "Quản trị Mạng",
    postlink: "#",
    needing: 3,
    current: 2,
    approved: 1,
    declined: 0,
  },
  {
    no: "15",
    job: "Kỹ sư An ninh Mạng",
    postlink: "#",
    needing: 4,
    current: 2,
    approved: 0,
    declined: 1,
  },
  {
    no: "16",
    job: "Giảng viên Khoa Kinh tế",
    postlink: "#",
    needing: 3,
    current: 3,
    approved: 1,
    declined: 1,
  },
];

const formsPerPage = 10;
const fields = [
  {
    name: "job",
    label: "Công việc cần tuyển",
    placeholder: "Nhập công việc cần tuyển...",
  },
  {
    name: "postlink",
    label: "Link bài viết tuyển dụng",
    placeholder: "Nhập link bài viết tuyển dụng...",
  },
  {
    name: "needing",
    label: "SL cần tuyển",
    placeholder: "Nhập số lượng cần tuyển...",
  },
  {
    name: "current",
    label: "SL hồ sơ hiện tại",
    placeholder: "Nhập số lượng hồ sơ hiện tại...",
  },
  {
    name: "approved",
    label: "SL hồ sơ đã duyệt",
    placeholder: "Nhập số lượng hồ sơ đã duyệt...",
  },
  {
    name: "declined",
    label: "SL hồ sơ đã từ chối",
    placeholder: "Nhập số lượng hồ sơ đã từ chối...",
  },
];

//Lấy ngày của hiện tại
const today = new Date();
const formattedToday = today
  .toLocaleDateString("en-GB") // Đổi sang DD/MM/YYYY format
  .replace(/\//g, "/");

//Lọc ra ngày gửi của hồ sơ bằng với ngày hiện tại và lấy số lượng
const applicationsTodayCount = applications.filter(
  (app) => app.sentDate === formattedToday,
).length;

//Lọc ra ngày gửi của hồ sơ bằng với ngày hiện tại và lấy số lượng
const approvedApplications = applications.filter(
  (app) => app.status === "Đã duyệt",
).length;

// Lấy danh sách status và type duy nhất từ forms
// const uniqueStatuses = Array.from(new Set(forms.map((form) => form.status)));
// const uniqueTypes = Array.from(new Set(forms.map((form) => form.type)));

const ManageForms = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(jobs.length).fill(false),
  );
  const [isTableHeadChecked, setIsTableHeadChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setSelectedForm] = useState<(typeof jobs)[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State cho ô tìm kiếm
  const [typeFilter, setTypeFilter] = useState(""); // Lưu bộ lọc danh mục
  const [statusFilter, setStatusFilter] = useState(""); // Lưu bộ lọc trạng thái
  const [filteredForms, setFilteredForms] = useState(jobs); // State cho dữ liệu sau khi lọc

  const indexOfLastForm = currentPage * formsPerPage;
  const indexOfFirstForm = indexOfLastForm - formsPerPage;
  const currentForms = filteredForms.slice(indexOfFirstForm, indexOfLastForm); // Sử dụng filteredForms
  const totalPages = Math.ceil(filteredForms.length / formsPerPage); // Dựa trên kết quả tìm kiếm

  useEffect(() => {
    const atLeastOneChecked = checkedItems.some((item) => item);
    const allUnchecked = checkedItems.every((item) => !item);
    setIsTableHeadChecked(atLeastOneChecked && !allUnchecked);
  }, [checkedItems]);

  const handleCheckItem = (globalIndex: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[globalIndex] = !updatedCheckedItems[globalIndex];
    setCheckedItems(updatedCheckedItems);
  };

  const handleCheckAll = () => {
    setIsTableHeadChecked((prev) => {
      const newCheckedState = !prev;
      setCheckedItems(new Array(jobs.length).fill(newCheckedState));
      return newCheckedState;
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSubmit = () => {
    setIsOpen(false);
  };

  // Hàm xử lý tìm kiếm và lọc dữ liệu
  const handleSearch = () => {
    const results = jobs.filter((form) => {
      const matchesTitle = form.job
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      // const matchesCategory = !typeFilter || form.type === typeFilter;
      // const matchesStatus = !statusFilter || form.status === statusFilter;
      return matchesTitle;
    });

    setFilteredForms(results);
    setCurrentPage(1); // Đặt lại trang về 1 sau khi tìm kiếm/lọc
  };

  return (
    <>
      <div className="min-h-min bg-gray-100 p-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500">
              Lượng nộp hồ sơ
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {jobs.length} hồ sơ
            </p>
            <a
              href="manage-recruitment/applications"
              className="text-blue-500 hover:underline text-sm"
            >
              Xem chi tiết
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500">
              Tổng cộng hồ sơ đã duyệt
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {approvedApplications} hồ sơ
            </p>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Xem chi tiết
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500">
              Lượng hồ sơ ứng tuyển hôm nay
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {applicationsTodayCount} hồ sơ
            </p>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
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
            <Button className="bg-sky-600 text-white">Tìm kiếm</Button>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="flex gap-1 bg-green-600 text-white">
                <Plus className="w-4 h-4" />
                Thêm
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <FormPopUp fields={fields} onSubmit={handleSubmit} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="border rounded-lg">
          <Table>
            <TableCaption>
              <div className="flex items-center gap-3">
                <span className="font-bold">
                  Danh sách công việc cần tuyển dụng
                </span>
                <span>{filteredForms.length} công việc</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-8 h-8 p-0 bg-transparent border border-gray-500 dark:border-white">
                    <SlidersHorizontal className="w-5 h-5 text-gray-500 dark:text-white" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Lọc biểu mẫu</DialogTitle>
                  </DialogHeader>
                  {/* <div className="flex flex-col gap-5 my-4">
                  <div className="flex items-center w-full">
                    <Label className="w-1/4">Danh mục:</Label>
                    <Select onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-3/4">
                        <SelectValue placeholder="Chọn danh mục" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center w-full">
                    <Label className="w-1/4">Trạng thái:</Label>
                    <Select onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-3/4">
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueStatuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div> */}
                  <DialogFooter>
                    <Button type="button">Lọc</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCaption>
          </Table>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pr-0">
                  <Checkbox
                    checked={isTableHeadChecked}
                    onCheckedChange={handleCheckAll}
                    isTableHead
                  />
                </TableHead>
                <TableHead className="px-0"></TableHead>
                {fields.map((field) => (
                  <TableHead key={field.name}>{field.label}</TableHead>
                ))}
                <TableHead className="text-right"></TableHead>
                <TableHead className="text-right w-10 px-0 m-0"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentForms.map((form, index) => {
                const globalIndex = indexOfFirstForm + index; // Index toàn cục của bản ghi
                return (
                  <TableRow key={form.job}>
                    <TableCell className="pr-0">
                      <Checkbox
                        checked={checkedItems[globalIndex]}
                        onCheckedChange={() => handleCheckItem(globalIndex)}
                      />
                    </TableCell>
                    <TableCell>{form.no}</TableCell>
                    <TableCell>{form.job}</TableCell>
                    <TableCell>
                      <Link href="#">Xem bài viết</Link>
                    </TableCell>
                    <TableCell>{form.needing}</TableCell>
                    <TableCell>{form.current}</TableCell>
                    <TableCell>{form.approved}</TableCell>
                    <TableCell>{form.declined}</TableCell>
                    <TableCell className="text-center px-0">
                      <Link href="/manage-recruitment/applications">
                        Xem hồ sơ
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">
                      <TableAction
                        form={form}
                        fields={fields}
                        onEdit={setSelectedForm}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="w-1/4 rounded-bl-lg">
                  Tổng {totalPages} trang
                </TableCell>
                <TableCell colSpan={3} className="w-2/5 text-center">
                  <PaginationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell
                  colSpan={3}
                  className="w-1/6 text-right rounded-br-lg"
                >
                  Từ dòng {indexOfFirstForm + 1} đến{" "}
                  {Math.min(indexOfLastForm, jobs.length)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ManageForms;
