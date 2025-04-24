import { useRef } from "react";

import { Table } from "@tanstack/react-table";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

import { nanoid } from "nanoid";
import React from "react";

export function TablePagination<TData>({ table }: { table: Table<TData> }) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Pagination>
      <PaginationContent className="flex-wrap justify-center">
        <PaginationItem>
          <PaginationPrevious
            tabIndex={table.getCanPreviousPage() ? 0 : -1}
            className={table.getCanPreviousPage() ? "cursor-pointer" : ""}
            size={"icon"}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
        </PaginationItem>

        {[...Array(table.getPageCount())].map((_, index) => {
          const pageIndex = table.getState().pagination.pageIndex;
          const totalPageCount = table.getPageCount();

          if (totalPageCount < 6)
            return (
              <PaginationItem key={nanoid()}>
                <PaginationLink
                  tabIndex={0}
                  onClick={() => {
                    table.setPageIndex(index);
                  }}
                  isActive={index === pageIndex}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );

          return (
            // https://codereviewvideos.com/how-i-fixed-warning-each-child-in-a-list-should-have-a-unique-key-prop/
            // Sửa lỗi mỗi bộ phận trong pagination cần key riêng
            <React.Fragment key={nanoid()}>
              {pageIndex === index ||
              (pageIndex >= index - 2 && pageIndex <= index + 2) ||
              index < 1 ||
              index >= table.getPageCount() - 1 ? (
                <PaginationItem>
                  <PaginationLink
                    tabIndex={0}
                    isActive={index === pageIndex}
                    onClick={() => {
                      table.setPageIndex(index);
                    }}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ) : (pageIndex > 3 &&
                  pageIndex < totalPageCount &&
                  pageIndex - 3 === index) ||
                pageIndex + 3 === index ? (
                <PaginationItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"ghost"} size={"icon"}>
                        <PaginationEllipsis />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col md:flex-row gap-2 md:min-w-[22rem]">
                      <Input
                        ref={inputRef}
                        type="number"
                        min={1}
                        max={table.getPageCount()}
                        placeholder="Nhập số trang để nhảy đến"
                        disabled={1 === table.getPageCount()}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            table.setPageIndex(
                              inputRef.current?.valueAsNumber! - 1,
                            );
                          }
                        }}
                        className="out-of-range:bg-destructive out-of-range:text-destructive-foreground"
                      />
                      <Button
                        disabled={
                          1 === table.getPageCount() ||
                          inputRef.current?.valueAsNumber! - 1 >
                            table.getPageCount()
                        }
                        onClick={() => {
                          table.setPageIndex(
                            inputRef.current?.valueAsNumber! - 1,
                          );
                        }}
                      >
                        Nhảy
                      </Button>
                    </PopoverContent>
                  </Popover>
                </PaginationItem>
              ) : null}
            </React.Fragment>
          );
        })}

        <PaginationItem>
          <PaginationNext
            tabIndex={table.getCanNextPage() ? 0 : -1}
            className={table.getCanNextPage() ? "cursor-pointer" : ""}
            size={"icon"}
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
