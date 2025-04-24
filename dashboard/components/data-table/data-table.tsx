import React, { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  CalendarClockIcon,
  LucideChevronLeft,
  LucideChevronRight,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { IForm } from "@/interfaces/form";
import { IOption } from "@/interfaces/option";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  itemsCount: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  currentPage,
  setCurrentPage,
  totalPages,
  itemsCount,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [searchText, setSearchText] = useState(""); // State to store search text
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [filters, setFilter] = useState<IForm>({
    updatedAt: undefined,
  });

  const recordsPerPage = 10;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      sorting,
    },
  });

  function handleFilter() {
    filters.updatedAt &&
      table
        .getColumn("updatedAt")
        ?.setFilterValue(new Date(filters.updatedAt!).toISOString());
    console.log(filters.updatedAt);
  }

  function resetFilters() {
    setColumnFilters([]); // Clear column filters
    setFilter({ updatedAt: undefined }); // Clear date filter
    table.getColumn("updatedAt")?.setFilterValue(undefined); // Clear table filter for updatedAt
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSearch = () => {
    table.getColumn("title")?.setFilterValue(searchText);
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
              placeholder="Tìm kiếm theo tiêu đề"
              id="searchPost"
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
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
      <div className="rounded-md border">
        <div className="flex justify-between grow-0 text-sm p-4 bg-muted/50 sticky">
          <div className="flex items-center gap-3">
            <span className="font-bold">Danh sách biểu mẫu</span>
            <span>Có {totalPages} biểu mẫu</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"icon"} variant={"outline"}>
                <SlidersHorizontal size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-bold">Lọc bài viết</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-5 my-4">
                <FilterDateRange
                  date={filters.updatedAt?.toLocaleDateString()}
                  onCallback={(value) => {
                    setFilter({ updatedAt: new Date(value!) });
                  }}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <div className="space-x-2">
                    <Button
                      type="button"
                      variant={"outline"}
                      onClick={resetFilters}
                    >
                      Xoá lọc
                    </Button>
                    <Button onClick={() => handleFilter()} type="button">
                      Lọc
                    </Button>
                  </div>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="border-y">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={
                          cell.column.id === "actions"
                            ? "w-[50px] text-center bg-white dark:bg-[hsl(0,0%,3.9%)] sticky right-0"
                            : "min-w-[150px]"
                        }
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center items-center gap-5 text-sm bg-muted/50 p-4">
          <div className="w-full flex items-center justify-between ">
            <div className="w-fit">
              <span>Tổng {totalPages} trang</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <LucideChevronLeft />
              </Button>
              {currentPage} of {totalPages}
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <LucideChevronRight />
              </Button>
            </div>

            <div className="text-left">
              <span>
                <span>
                  Từ dòng {indexOfFirstRecord + 1} đến{" "}
                  {Math.min(indexOfLastRecord, itemsCount)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function FilterSelect<T extends IOption>({
  label,
  placeholder,
  options,
  onCallback,
}: {
  label: string;
  placeholder: string;
  options: T[];
  onCallback: (value: string | string[] | undefined) => void;
}) {
  return (
    <div className="flex items-center w-full">
      <Label className="w-1/3">{label}</Label>
      <Select onValueChange={(value) => onCallback(value)}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        {options ? (
          <SelectContent>
            {options.map((value) => {
              return (
                <SelectItem key={value.value} value={value.value}>
                  {value.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        ) : null}
      </Select>
    </div>
  );
}

function FilterDateRange({
  date,
  onCallback,
}: {
  date: any;
  onCallback: (newDate: Date | undefined) => void;
}) {
  return (
    <div className="flex items-center w-full">
      <Label className="w-1/3">Đăng trước ngày</Label>
      <Popover modal>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className="w-full justify-start">
            <div className="flex items-center justify-start gap-2">
              <CalendarClockIcon />
              {date ? date : <span>Chọn thời gian</span>}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            selected={date}
            onSelect={(selected) => {
              onCallback(selected);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
