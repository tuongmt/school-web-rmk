"use client";

import { useState } from "react";
import Link from "next/link";

import { flexRender } from "@tanstack/react-table";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Table as TableWrapper,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { tagOptions } from "@/constants/post-form-options/tags";
import { categoryOptions } from "@/constants/post-form-options/categories";
import { languageOptions } from "@/constants/post-form-options/languages";

import { CalendarClockIcon, SlidersHorizontal } from "lucide-react";

import { TablePagination } from "@/components/pagination/data-table-pagination";

import { IOption } from "@/interfaces/option";
import { IFilterPost } from "@/interfaces/post";
import { IDataTable } from "@/interfaces/data-table";
import { Separator } from "@/components/ui/separator";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { enUS, ko, vi } from "date-fns/locale";
import { useLocale } from "next-intl";

export default function PostDataTable<TData, TValue>({
  table,
  columns,
  data,
}: IDataTable<TData, TValue>) {
  // Có thể để trống, nhưng kiểu này dễ theo dõi dữ liệu hơn
  const [filters, setFilter] = useState<IFilterPost>({
    tag: undefined,
    category: undefined,
    language: undefined,
    date: undefined,
  });

  function clearFilter() {
    setFilter({});
    table.resetColumnFilters();
  }

  function handleFilter() {
    filters.tag && table.getColumn("tags")?.setFilterValue(filters.tag);
    filters.category &&
      table.getColumn("category")?.setFilterValue(filters.category);
    filters.language &&
      table.getColumn("language")?.setFilterValue(filters.language);
    filters.date && table.getColumn("postDate")?.setFilterValue(filters.date!);
  }
  return (
    <>
      <div className="flex justify-between gap-2 mb-5">
        <div>
          <Input
            id="searchPost"
            type="text"
            placeholder="Lọc tiêu đề bài viết..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) => {
              table.getColumn("title")?.setFilterValue(event.target.value);
            }}
          />
        </div>
        <Link href={"/posts/create"}>
          <Button>Create new post</Button>
        </Link>
      </div>
      <div className="flex justify-between grow-0 text-sm p-4 border-l border-r border-t rounded-t-lg bg-muted/50 sticky">
        <div className="flex items-center gap-3">
          <span className="font-bold">Danh sách bài viết</span>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-2">
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[4.5rem]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span>
              của{" "}
              {(data as TData[]).length ??
                (
                  data as {
                    data: TData[];
                    rowCount: number;
                  }
                ).rowCount}{" "}
              bài viết
            </span>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <SlidersHorizontal size={20} />
            </Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col gap-5 my-4">
            <DialogHeader>
              <DialogTitle className="font-bold mb-4">Lọc bài viết</DialogTitle>
            </DialogHeader>
            <FilterSelect
              label={"Từ khoá"}
              placeholder={"Chọn từ khoá"}
              options={tagOptions}
              onCallback={(value) => {
                setFilter({
                  ...filters,
                  tag: value,
                });
              }}
              current={filters.tag}
            />
            <FilterSelect
              label={"Danh mục"}
              placeholder={"Chọn danh mục"}
              options={categoryOptions}
              onCallback={(value) => {
                setFilter({ ...filters, category: value });
              }}
              current={filters.category}
            />
            <FilterSelect
              label={"Ngôn ngữ"}
              placeholder={"Chọn ngôn ngữ"}
              options={languageOptions}
              onCallback={(value) => {
                setFilter({ ...filters, language: value });
              }}
              current={filters.language}
            />
            <FilterDateRange
              date={filters.date as DateRange}
              onCallback={(value) => {
                setFilter({
                  ...filters,
                  date: {
                    from: value?.from,
                    to: value?.to,
                  },
                });
              }}
            />
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <>
                  <Button
                    type="button"
                    variant={"outline"}
                    onClick={() => clearFilter()}
                  >
                    Xoá lọc
                  </Button>
                  <Button
                    onClick={() => handleFilter()}
                    type="button"
                    className="space-x-2"
                  >
                    Lọc
                  </Button>
                </>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border overflow-y-auto">
        <TableWrapper>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`${
                        header.column.getIsPinned() === "right"
                          ? "bg-background/80 drop-shadow-md border-l-2 sticky right-0"
                          : "relative"
                      } text-nowrap`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {
              // 1. Kiểm tra có dữ liệu không
              table.getRowModel().rows?.length ? (
                // 2. Tạo dòng dữ liệu trong table
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {
                      // 3. Tạo ô dữ liệu
                      row.getVisibleCells().map((cell) => {
                        return (
                          <TableCell
                            key={cell.id}
                            className={
                              cell.column.getIsPinned() === "right"
                                ? "bg-background/95 drop-shadow-md border-l-2 sticky right-0"
                                : "relative"
                            }
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        );
                      })
                    }
                  </TableRow>
                ))
              ) : (
                // 4. Nếu không có dữ liệu
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </TableWrapper>
      </div>
      <div className="text-sm bg-muted/50 p-2 border-b border-l border-r rounded-b-lg">
        <TablePagination table={table} />
      </div>
    </>
  );
}

function FilterDateRange({
  date,
  onCallback,
}: {
  date?: DateRange;
  onCallback: (newDate: DateRange | undefined) => void;
}) {
  const locale = useLocale();

  function checkLocale() {
    if (locale === "vi") {
      return vi;
    }
    if (locale === "en") {
      return enUS;
    }
    if (locale === "ko") {
      return ko;
    }
  }

  return (
    <div className="flex items-center w-full">
      <Label className="w-1/3">Đăng trước ngày</Label>
      <Popover modal>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className="w-full justify-start">
            <div className="flex items-center justify-start gap-2">
              <CalendarClockIcon />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "P", { locale: checkLocale() })} -{" "}
                    {format(date.to, "P", { locale: checkLocale() })}
                  </>
                ) : (
                  <>{format(date.from, "P")}</>
                )
              ) : (
                <span>Chọn phạm vi thời gian</span>
              )}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            locale={checkLocale()}
            initialFocus
            mode="range"
            selected={date}
            onSelect={(value) => {
              onCallback(value);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function FilterSelect<T extends IOption>({
  label,
  placeholder,
  options,
  current,
  onCallback,
}: {
  label: string;
  placeholder: string;
  options: T[];
  current: string | undefined;
  onCallback: (value: string | undefined) => void;
}) {
  return (
    <div className="flex items-center w-full">
      <Label className="w-1/3">{label}</Label>
      <Select
        value={current ?? undefined}
        onValueChange={(value) => onCallback(value)}
      >
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
