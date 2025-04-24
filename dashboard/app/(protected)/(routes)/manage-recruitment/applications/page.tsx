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
import { Plus, Search, SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import PaginationComponent from "@/components/pagination/pagination-component";
import TableAction from "@/components/table-action/table-action-applications";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import FormPopUp from "@/components/form-pop-up/appli-form-pop-up";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconArrowsSort } from "@tabler/icons-react";

import { jobs } from "../page";

export const applications = [
  {
    no: "1",
    name: "John Doe",
    job: "Giảng viên Khoa CNTT",
    email: "JohnDoe@gmail.com",
    phone: "012345789",
    cvURL: "abc.com",
    coverLetter: "",
    status: "Chờ duyệt",
    sentDate: "22/10/2024",
    interviewDate: "24/10/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "2",
    name: "Jane Smith",
    job: "Chuyên viên Marketing",
    email: "JaneSmith@gmail.com",
    phone: "012345788",
    cvURL: "xyz.com",
    coverLetter: "Cover letter content",
    status: "Đã duyệt",
    sentDate: "21/10/2024",
    interviewDate: "23/10/2024",
    note: "Approved for interview",
    address: "Hà Nội",
  },
  {
    no: "3",
    name: "Alice Nguyen",
    job: "Nhân viên Thiết kế Đồ họa",
    email: "AliceNguyen@gmail.com",
    phone: "012345787",
    cvURL: "portfolio.com",
    coverLetter: "Looking forward to the opportunity",
    status: "Chờ duyệt",
    sentDate: "20/10/2024",
    interviewDate: "25/10/2024",
    note: "",
    address: "Đà Nẵng",
  },
  {
    no: "4",
    name: "David Tran",
    job: "Kỹ sư An ninh Mạng",
    email: "DavidTran@gmail.com",
    phone: "012345786",
    cvURL: "securelink.com",
    coverLetter: "",
    status: "Đã sắp lịch",
    sentDate: "19/10/2024",
    interviewDate: "26/10/2024",
    note: "Highly recommended",
    address: "Hồ Chí Minh",
  },
  {
    no: "5",
    name: "Emily Pham",
    job: "Lập trình viên Backend",
    email: "EmilyPham@gmail.com",
    phone: "012345785",
    cvURL: "codebase.com",
    coverLetter: "Experienced backend developer",
    status: "Chờ duyệt",
    sentDate: "18/10/2024",
    interviewDate: "27/10/2024",
    note: "",
    address: "Hải Phòng",
  },
  {
    no: "6",
    name: "Mark Le",
    job: "Lập trình viên Frontend",
    email: "MarkLe@gmail.com",
    phone: "012345784",
    cvURL: "mywork.com",
    coverLetter: "Excited to join the team",
    status: "Đã duyệt",
    sentDate: "17/10/2024",
    interviewDate: "28/10/2024",
    note: "",
    address: "Cần Thơ",
  },
  {
    no: "7",
    name: "Lucy Hoang",
    job: "Trợ lý Giám đốc",
    email: "LucyHoang@gmail.com",
    phone: "012345783",
    cvURL: "linkedin.com",
    coverLetter: "Experienced executive assistant",
    status: "Đã sắp lịch",
    sentDate: "16/10/2024",
    interviewDate: "29/10/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "8",
    name: "Brian Vu",
    job: "Quản trị Mạng",
    email: "BrianVu@gmail.com",
    phone: "012345782",
    cvURL: "networks.com",
    coverLetter: "",
    status: "Chờ duyệt",
    sentDate: "15/10/2024",
    interviewDate: "30/10/2024",
    note: "Strong networking skills",
    address: "Hà Nội",
  },
  {
    no: "9",
    name: "Hannah Kim",
    job: "Nhân viên CSKH",
    email: "HannahKim@gmail.com",
    phone: "012345781",
    cvURL: "service.com",
    coverLetter: "Passionate about customer service",
    status: "Đã duyệt",
    sentDate: "14/10/2024",
    interviewDate: "31/10/2024",
    note: "Good customer interaction skills",
    address: "Đà Nẵng",
  },
  {
    no: "10",
    name: "Steve Lam",
    job: "Chuyên viên Phân tích Dữ liệu",
    email: "SteveLam@gmail.com",
    phone: "012345780",
    cvURL: "datainsights.com",
    coverLetter: "Data-driven analyst",
    status: "Đã sắp lịch",
    sentDate: "13/10/2024",
    interviewDate: "01/11/2024",
    note: "",
    address: "Hải Phòng",
  },
  {
    no: "11",
    name: "Sophia Vu",
    job: "Giảng viên Khoa Kinh tế",
    email: "SophiaVu@gmail.com",
    phone: "012345779",
    cvURL: "portfolio.com",
    coverLetter: "Economics professor",
    status: "Chờ duyệt",
    sentDate: "12/10/2024",
    interviewDate: "02/11/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "12",
    name: "Michael Ngo",
    job: "Chuyên viên SEO",
    email: "MichaelNgo@gmail.com",
    phone: "012345778",
    cvURL: "seoexpert.com",
    coverLetter: "Experienced SEO specialist",
    status: "Đã duyệt",
    sentDate: "11/10/2024",
    interviewDate: "03/11/2024",
    note: "",
    address: "Cần Thơ",
  },
  {
    no: "13",
    name: "Ethan Bui",
    job: "Nhân viên Tổ chức Sự kiện",
    email: "EthanBui@gmail.com",
    phone: "012345777",
    cvURL: "eventplanning.com",
    coverLetter: "",
    status: "Đã sắp lịch",
    sentDate: "10/10/2024",
    interviewDate: "04/11/2024",
    note: "",
    address: "Đà Nẵng",
  },
  {
    no: "14",
    name: "Isabella Phan",
    job: "Nhân viên Bán hàng",
    email: "IsabellaPhan@gmail.com",
    phone: "012345776",
    cvURL: "salesguru.com",
    coverLetter: "Sales enthusiast",
    status: "Chờ duyệt",
    sentDate: "09/10/2024",
    interviewDate: "05/11/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "15",
    name: "Jacob Tran",
    job: "Chuyên viên Marketing",
    email: "JacobTran@gmail.com",
    phone: "012345775",
    cvURL: "jacobportfolio.com",
    coverLetter: "Creative marketer",
    status: "Đã duyệt",
    sentDate: "08/10/2024",
    interviewDate: "06/11/2024",
    note: "",
    address: "Hà Nội",
  },
  {
    no: "16",
    name: "Nina Le",
    job: "Chuyên viên Nhân sự",
    email: "NinaLe@gmail.com",
    phone: "012345774",
    cvURL: "ninahr.com",
    coverLetter: "Passionate about HR",
    status: "Chờ duyệt",
    sentDate: "07/10/2024",
    interviewDate: "07/11/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "17",
    name: "Tommy Vo",
    job: "Nhân viên Kế toán",
    email: "TommyVo@gmail.com",
    phone: "012345773",
    cvURL: "accounting.com",
    coverLetter: "Experienced in accounting",
    status: "Đã duyệt",
    sentDate: "06/10/2024",
    interviewDate: "08/11/2024",
    note: "Strong skills in finance",
    address: "Hà Nội",
  },
  {
    no: "18",
    name: "Amanda Huynh",
    job: "Chuyên viên Thiết kế UX/UI",
    email: "AmandaHuynh@gmail.com",
    phone: "012345772",
    cvURL: "amanda-design.com",
    coverLetter: "UX/UI focused designer",
    status: "Đã sắp lịch",
    sentDate: "05/10/2024",
    interviewDate: "09/11/2024",
    note: "",
    address: "Đà Nẵng",
  },
  {
    no: "19",
    name: "Chris Chau",
    job: "Nhân viên Bán hàng",
    email: "ChrisChau@gmail.com",
    phone: "012345771",
    cvURL: "salespro.com",
    coverLetter: "Experienced in sales",
    status: "Chờ duyệt",
    sentDate: "04/10/2024",
    interviewDate: "10/11/2024",
    note: "",
    address: "Cần Thơ",
  },
  {
    no: "20",
    name: "Sara Nguyen",
    job: "Chuyên viên PR",
    email: "SaraNguyen@gmail.com",
    phone: "012345770",
    cvURL: "publicrelations.com",
    coverLetter: "Public relations expert",
    status: "Đã duyệt",
    sentDate: "03/10/2024",
    interviewDate: "11/11/2024",
    note: "",
    address: "Hải Phòng",
  },
  {
    no: "21",
    name: "Daniel Lam",
    job: "Giám sát Sản xuất",
    email: "DanielLam@gmail.com",
    phone: "012345769",
    cvURL: "production.com",
    coverLetter: "Experienced in production",
    status: "Chờ duyệt",
    sentDate: "02/10/2024",
    interviewDate: "12/11/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "22",
    name: "Tina Tran",
    job: "Chuyên viên Thiết kế 3D",
    email: "TinaTran@gmail.com",
    phone: "012345768",
    cvURL: "3dportfolio.com",
    coverLetter: "Skilled in 3D design",
    status: "Đã sắp lịch",
    sentDate: "01/10/2024",
    interviewDate: "13/11/2024",
    note: "",
    address: "Đà Nẵng",
  },
  {
    no: "23",
    name: "Ryan Pham",
    job: "Nhân viên QA",
    email: "RyanPham@gmail.com",
    phone: "012345767",
    cvURL: "qajobs.com",
    coverLetter: "Dedicated QA specialist",
    status: "Đã duyệt",
    sentDate: "30/09/2024",
    interviewDate: "14/11/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "24",
    name: "Linda Vu",
    job: "Lập trình viên Mobile",
    email: "LindaVu@gmail.com",
    phone: "012345766",
    cvURL: "mobiledev.com",
    coverLetter: "Passionate mobile developer",
    status: "Chờ duyệt",
    sentDate: "29/09/2024",
    interviewDate: "15/11/2024",
    note: "",
    address: "Hà Nội",
  },
  {
    no: "25",
    name: "Harry Bui",
    job: "Nhân viên IT Helpdesk",
    email: "HarryBui@gmail.com",
    phone: "012345765",
    cvURL: "helpdesk.com",
    coverLetter: "Experienced in IT support",
    status: "Đã duyệt",
    sentDate: "28/09/2024",
    interviewDate: "16/11/2024",
    note: "Good technical skills",
    address: "Hải Phòng",
  },
  {
    no: "26",
    name: "Victoria Nguyen",
    job: "Chuyên viên Phát triển Kinh doanh",
    email: "VictoriaNguyen@gmail.com",
    phone: "012345764",
    cvURL: "businessdev.com",
    coverLetter: "Skilled in business development",
    status: "Chờ duyệt",
    sentDate: "27/09/2024",
    interviewDate: "17/11/2024",
    note: "",
    address: "Cần Thơ",
  },
  {
    no: "27",
    name: "Oscar Chau",
    job: "Nhân viên Kho",
    email: "OscarChau@gmail.com",
    phone: "012345763",
    cvURL: "warehouse.com",
    coverLetter: "Experienced warehouse staff",
    status: "Đã sắp lịch",
    sentDate: "26/09/2024",
    interviewDate: "18/11/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "28",
    name: "Olivia Le",
    job: "Chuyên viên Tư vấn Bán hàng",
    email: "OliviaLe@gmail.com",
    phone: "012345762",
    cvURL: "salesconsultant.com",
    coverLetter: "Consultative sales expert",
    status: "Đã duyệt",
    sentDate: "25/09/2024",
    interviewDate: "19/11/2024",
    note: "",
    address: "Đà Nẵng",
  },
  {
    no: "29",
    name: "Jack Hoang",
    job: "Nhân viên Kỹ thuật",
    email: "JackHoang@gmail.com",
    phone: "012345761",
    cvURL: "techskills.com",
    coverLetter: "Experienced technician",
    status: "Chờ duyệt",
    sentDate: "24/09/2024",
    interviewDate: "20/11/2024",
    note: "",
    address: "Hà Nội",
  },
  {
    no: "30",
    name: "Chloe Ngo",
    job: "Giảng viên Ngôn ngữ Anh",
    email: "ChloeNgo@gmail.com",
    phone: "012345760",
    cvURL: "languageexpert.com",
    coverLetter: "English language professor",
    status: "Đã duyệt",
    sentDate: "23/09/2024",
    interviewDate: "21/11/2024",
    note: "",
    address: "Hồ Chí Minh",
  },
  {
    no: "31",
    name: "Henry Pham",
    job: "Chuyên viên Nhân sự",
    email: "HenryPham@gmail.com",
    phone: "012345759",
    cvURL: "hrguru.com",
    coverLetter: "Passionate HR specialist",
    status: "Chờ duyệt",
    sentDate: "22/09/2024",
    interviewDate: "22/11/2024",
    note: "",
    address: "Cần Thơ",
  },
  {
    no: "32",
    name: "Sophia Chau",
    job: "Trợ lý Giám đốc",
    email: "SophiaChau@gmail.com",
    phone: "012345758",
    cvURL: "assistant.com",
    coverLetter: "Experienced executive assistant",
    status: "Đã sắp lịch",
    sentDate: "21/09/2024",
    interviewDate: "23/11/2024",
    note: "",
    address: "Hà Nội",
  },
  {
    no: "33",
    name: "Leo Nguyen",
    job: "Nhân viên Kỹ thuật",
    email: "LeoNguyen@gmail.com",
    phone: "012345757",
    cvURL: "technicalskills.com",
    coverLetter: "Passionate about engineering",
    status: "Đã duyệt",
    sentDate: "20/09/2024",
    interviewDate: "24/11/2024",
    note: "",
    address: "Hải Phòng",
  },
];

const formsPerPage = 10;
const fields = [
  { name: "name", label: "Tên ứng viên", placeholder: "Nhập tên ứng viên..." },
  {
    name: "job",
    label: "Công việc ứng tuyển",
    placeholder: "Nhập công việc ứng tuyển...",
  },
  { name: "email", label: "Email", placeholder: "Nhập email..." },
  { name: "phone", label: "SĐT", placeholder: "Nhập số điện thoại..." },
  { name: "status", label: "Trạng thái", placeholder: "Chọn trạng thái" },
  { name: "cvURL", label: "Link CV", placeholder: "Nhập link CV..." },
  {
    name: "coverLetter",
    label: "Cover Letter",
    placeholder: "Nhập link cover letter...",
  },
  {
    name: "sentDate",
    label: "Ngày gửi hồ sơ",
    placeholder: "Chọn ngày gửi hồ sơ",
  },
  {
    name: "interviewDate",
    label: "Ngày hẹn p.vấn",
    placeholder: "Chọn ngày phỏng vấn",
  },
  { name: "note", label: "Ghi chú", placeholder: "Nhập ghi chú..." },
  { name: "address", label: "Địa chỉ", placeholder: "Nhập địa chỉ..." },
];

// Lấy danh sách status và type duy nhất từ forms
const uniqueStatuses = Array.from(
  new Set(applications.map((form) => form.status)),
);
const uniqueJobs = Array.from(new Set(applications.map((form) => form.job)));

const ManageForms = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(applications.length).fill(false),
  );
  const [isTableHeadChecked, setIsTableHeadChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setSelectedForm] = useState<(typeof applications)[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State cho ô tìm kiếm
  const [typeFilter, setTypeFilter] = useState(""); // Lưu bộ lọc danh mục
  const [statusFilter, setStatusFilter] = useState(""); // Lưu bộ lọc trạng thái
  const [filteredForms, setFilteredForms] = useState(applications); // State cho dữ liệu sau khi lọc

  const [sortOrder, setSortOrder] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "asc" }), {}),
  ); // State cho việc sort dữ liệu

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
      setCheckedItems(new Array(applications.length).fill(newCheckedState));
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
    const results = applications.filter((form) => {
      const matchedName = form.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchedJob = !typeFilter || form.job === typeFilter;
      const matchedStatus = !statusFilter || form.status === statusFilter;
      return matchedName && matchedStatus && matchedJob;
    });

    setFilteredForms(results);
    setCurrentPage(1); // Đặt lại trang về 1 sau khi tìm kiếm/lọc
  };

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
              placeholder="Tìm kiếm theo tên ứng viên"
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
          <DialogContent className="sm:max-w-[1000px]">
            <FormPopUp
              fields={fields}
              type="hồ sơ"
              onSubmit={handleSubmit}
              jobs={jobs.map((job) => job.job)}
            />
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg">
        <Table>
          <TableCaption>
            <div className="flex items-center gap-3">
              <span className="font-bold">Danh sách ứng viên</span>
              <span>{filteredForms.length} ứng viên</span>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-8 h-8 p-0 bg-transparent border border-gray-500 dark:border-white">
                  <SlidersHorizontal className="w-5 h-5 text-gray-500 dark:text-white" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Lọc ứng viên</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-5 my-4">
                  <div className="flex items-center w-full">
                    <Label className="w-1/4">Công việc:</Label>
                    <Select onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-3/4">
                        <SelectValue placeholder="Chọn danh mục" />
                      </SelectTrigger>
                      <SelectContent>
                        {uniqueJobs.map((job) => (
                          <SelectItem key={job} value={job}>
                            {job}
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
                </div>
                <DialogFooter>
                  <Button type="button" onClick={handleSearch}>
                    Lọc
                  </Button>
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
              {fields.slice(0, 5).map((field) => (
                <TableHead className="items-center" key={field.name}>
                  {" "}
                  {field.label} <IconArrowsSort className="w-5 h-5" />{" "}
                </TableHead>
              ))}
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
                  <TableCell className="px-0 w-0">{form.no}</TableCell>
                  <TableCell>{form.name}</TableCell>
                  <TableCell>{form.job}</TableCell>
                  <TableCell>{form.email}</TableCell>
                  <TableCell>{form.phone}</TableCell>
                  <TableCell>
                    <span className="bg-green-600 py-2 px-4 text-white rounded-lg">
                      {form.status}
                    </span>
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
              <TableCell colSpan={3} className="w-1/6 text-right rounded-br-lg">
                Từ dòng {indexOfFirstForm + 1} đến{" "}
                {Math.min(indexOfLastForm, applications.length)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default ManageForms;
