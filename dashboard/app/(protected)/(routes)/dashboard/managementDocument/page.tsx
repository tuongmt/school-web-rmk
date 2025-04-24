"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import PaginationComponent from "@/components/pagination/pagination-component";
import { Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TableAction from "@/components/table-action/table-action-document";

// Define the Document interface
interface Document {
  id: string;
  title: string;
  content: string;
  type: string;
  status: string;
}
const formsPerPage = 4;
const forms = [
  {
    no: "1",
    title: "Titlegiatgan",
    content: "https://drive.google.com/uc?id=1120N7JUJwsgrUgUXsBsrYtXdnQgBcJXx",
    type: "Khóa Luận",
    status: "Active",
  },
];
const DocumentPage = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [isTableHeadChecked, setIsTableHeadChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [filteredForms, setFilteredForms] = useState(forms);

  // Pagination logic
  const indexOfLastDocument = currentPage * itemsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - itemsPerPage;
  const currentDocuments = filteredDocuments.slice(
    indexOfFirstDocument,
    indexOfLastDocument,
  );
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  useEffect(() => {
    const storedDocuments = JSON.parse(
      localStorage.getItem("documents") || "[]",
    );
    setDocuments(storedDocuments);
    setFilteredDocuments(storedDocuments);
    setCheckedItems(new Array(storedDocuments.length).fill(false));
    setIsLoading(false);
  }, []);

  const handleSearch = useCallback(() => {
    const results = documents.filter((doc) => {
      const matchesTitle = doc.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesType =
        !typeFilter || typeFilter === "Tất cả" || doc.type === typeFilter;
      const matchesStatus =
        !statusFilter ||
        statusFilter === "Tất cả" ||
        doc.status === statusFilter;

      return matchesTitle && matchesType && matchesStatus;
    });
    setFilteredDocuments(results);
    setCurrentPage(1);
  }, [documents, searchTerm, typeFilter, statusFilter]);

  const handleCreateDocument = () => {
    router.push("/dashboard/documents");
  };

  const handleDeleteDocument = (id: string) => {
    const updatedDocuments = documents.filter((doc) => doc.id !== id);
    setDocuments(updatedDocuments);
    setFilteredDocuments(updatedDocuments);
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
  };

  const handleEditDocument = (id: string) => {
    const documentToEdit = documents.find((doc) => doc.id === id);
    if (documentToEdit) {
      localStorage.setItem("documentToEdit", JSON.stringify(documentToEdit));
      router.push("/dashboard/documents");
    }
  };

  const handleCheckItem = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    const allChecked = updatedCheckedItems.every((item) => item);
    setIsTableHeadChecked(allChecked);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleCheckAll = () => {
    const allChecked = checkedItems.every((item) => item);
    const newCheckedState = new Array(filteredDocuments.length).fill(
      !allChecked,
    );
    setCheckedItems(newCheckedState);
    setIsTableHeadChecked(!allChecked);
  };

  // Get unique types and statuses from documents
  const uniqueTypes = Array.from(new Set(documents.map((doc) => doc.type)));
  const uniqueStatuses = Array.from(
    new Set([...documents.map((doc) => doc.status), "Active", "InActive"]),
  );

  const handleTypeFilterChange = (value: string) => {
    setTypeFilter(value);
  };

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Quản lý tài liệu
      </h1>

      <div className="flex items-center justify-between mb-4">
        <div className="relative flex items-center">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Search className="w-5 h-5 text-muted-foreground" />
          </span>
          <Input
            className="w-80 rounded-sm pl-8"
            placeholder="Tìm kiếm theo tiêu đề"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="ml-2 bg-sky-600 text-white" onClick={handleSearch}>
            Tìm kiếm
          </Button>
        </div>
        <Button
          onClick={handleCreateDocument}
          className="bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
        >
          Tạo tài liệu
        </Button>
      </div>

      <div className="flex gap-4 mb-4">
        <Select onValueChange={handleTypeFilterChange} value={typeFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Chọn loại" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tất cả">Tất cả</SelectItem>
            {uniqueTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={handleStatusFilterChange} value={statusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Chọn trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tất cả">Tất cả</SelectItem>
            {uniqueStatuses.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleSearch}
          className="bg-green-600 text-white hover:bg-green-700 transition duration-200"
        >
          Lọc
        </Button>
      </div>

      <ToastContainer />
      <div style={{ height: "calc(100vh - 300px)", overflowY: "auto" }}>
        <TableCaption>
          <div className="flex items-center gap-3">
            <span className="font-bold">Danh sách tài liệu</span>
            <span>{filteredDocuments.length} tài liệu</span>
          </div>
        </TableCaption>
        <Table className="min-w-full bg-white border border-gray-300">
          <TableHeader>
            <TableRow className="bg-white-100">
              <TableHead>
                <Checkbox
                  checked={isTableHeadChecked}
                  onCheckedChange={handleCheckAll}
                />
              </TableHead>
              <TableHead>No</TableHead>
              <TableHead>Tiêu đề</TableHead>
              <TableHead>Loại</TableHead>
              <TableHead>Trạng thái</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentDocuments.map((document, index) => (
              <TableRow key={document.id} className="hover:bg-gray-200">
                <TableCell>
                  <Checkbox
                    checked={checkedItems[index + indexOfFirstDocument]}
                    onCheckedChange={() =>
                      handleCheckItem(index + indexOfFirstDocument)
                    }
                  />
                </TableCell>
                <TableCell>{index + 1 + indexOfFirstDocument}</TableCell>
                <TableCell>
                  <div className="max-w-xs truncate overflow-hidden whitespace-nowrap">
                    {document.title.length > 30
                      ? `${document.title.slice(0, 30)}...`
                      : document.title}
                  </div>
                </TableCell>
                <TableCell>{document.type}</TableCell>
                <TableCell>{document.status}</TableCell>
                <TableCell>
                  <TableAction
                    form={document}
                    fields={[]}
                    onEdit={() => handleEditDocument(document.id)}
                    onDelete={() => handleDeleteDocument(document.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5} className="w-1/4 rounded-bl-lg">
            Tổng {totalPages} trang
          </TableCell>
          <TableCell colSpan={3} className="w-2/4 text-center">
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </TableCell>
          <TableCell colSpan={1} className="w-1/4 text-right rounded-br-lg">
            Từ dòng {indexOfFirstDocument + 1} đến{" "}
            {Math.min(indexOfLastDocument, forms.length)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </div>
  );
};

export default DocumentPage;
