"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  PaginationState,
  Updater,
  getPaginationRowModel,
} from "@tanstack/react-table";

import { postColumns } from "@/components/post/table/post-columns";
import PostDataTable from "@/components/post/table/post-table";

import { parseAsInteger, parseAsJson, useQueryState } from "nuqs";

import { fetchPosts, makePostData } from "@/constants/mock-data/mock-post";

import { IPost } from "@/interfaces/post";
import { postFilterSchema } from "@/interfaces/zod/post-schema";

import { DateRange } from "react-day-picker";
import { isValid } from "date-fns";

export default function PostManagement() {
  const [mounted, setMount] = useState<boolean>(false);

  const columns = useMemo(() => postColumns, []);
  const mockData = useMemo(() => makePostData(20), []);

  const queryClient = useQueryClient();

  const [filter, setFilter] = useQueryState(
    "filters",
    parseAsJson(postFilterSchema.parse).withDefault({
      title: undefined,
      tag: undefined,
      category: undefined,
      language: undefined,
      from: undefined,
      to: undefined,
    }),
  );

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [pageSize, setPageSize] = useQueryState(
    "perPage",
    parseAsInteger.withDefault(10),
  );

  const pagination: PaginationState = {
    pageIndex: page - 1,
    pageSize: pageSize,
  };

  const onColumnFiltersChange = useCallback(
    (updaterOrValue: Updater<ColumnFiltersState>) => {
      setColumnFilters((prev) => {
        const next =
          typeof updaterOrValue === "function"
            ? updaterOrValue(prev)
            : updaterOrValue;

        // https://github.com/sadmann7/shadcn-table/blob/fa6e82f7dc60ec87e60e34100b3c69c95c45658d/src/hooks/use-data-table.ts#L278
        const filterUpdate = next.reduce<
          Record<string, string | DateRange | undefined>
        >((acc, filter) => {
          acc[filter.id] = filter.value as string;

          return acc;
        }, {});

        prev.forEach((prevFilter) => {
          if (!next.some((filter) => filter.id === prevFilter.id)) {
            filterUpdate[prevFilter.id] === undefined;
          }
        });

        setFilter({
          title: filterUpdate.title as string,
          tag: filterUpdate.tags as string,
          category: filterUpdate.category as string,
          language: filterUpdate.language as string,
          from:
            filterUpdate.postDate &&
            isValid((filterUpdate.postDate as DateRange).from)
              ? (filterUpdate.postDate as DateRange).from!
              : undefined,
          to:
            filterUpdate.postDate &&
            isValid((filterUpdate.postDate as DateRange).to)
              ? (filterUpdate.postDate as DateRange).to!
              : undefined,
        });
        setPage(1);

        return next;
      });
    },
    [setFilter, setPage],
  );

  /* 
    https://github.com/sadmann7/shadcn-table/blob/835ca0b73e23da9157d987aefa4fa18af3de0233/src/hooks/use-data-table.ts#L223
    Hỗ trợ cả bấm nút sau và trước (function), và khi bấm số trang cụ thể
    (PaginantionState)
  */
  function onPaginationChange(updaterOrValue: Updater<PaginationState>) {
    if (typeof updaterOrValue === "function") {
      const newPagination = updaterOrValue(pagination);

      void setPage(newPagination.pageIndex + 1);
      void setPageSize(newPagination.pageSize);
    } else {
      void setPage(updaterOrValue.pageIndex + 1);
      void setPageSize(updaterOrValue.pageSize);
    }
  }

  const {
    isPending,
    error,
    data: response,
  } = useQuery<{
    data: IPost[];
    rowCount: number;
  }>({
    queryKey: ["posts", pagination, filter],
    queryFn: async () => {
      const paginatedPosts = await fetchPosts(pagination, filter);

      // https://tkdodo.eu/blog/seeding-the-query-cache#push-approach
      paginatedPosts.data.map((post) => {
        queryClient.setQueryData(["posts", post.id], post);
      });

      return paginatedPosts;
    },
    placeholderData: keepPreviousData,
    gcTime: 3600000, // 1 hour
  });

  const table = useReactTable<IPost>({
    data: (response && response?.data) as IPost[],
    columns,
    state: {
      columnFilters,
      pagination,
      columnPinning: {
        right: ["actions"],
      },
    },
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: !error ? false : true,
    getFilteredRowModel: !error ? undefined : getFilteredRowModel(),
    // onColumnFiltersChange: setColumnFilters,
    onColumnFiltersChange,
    manualPagination: !error ? false : true,
    getPaginationRowModel: !error ? undefined : getPaginationRowModel(),
    onPaginationChange: onPaginationChange,
    rowCount: response?.rowCount,
    autoResetPageIndex: false,
  });

  useEffect(() => {
    if (mounted === false) {
      setMount(true);

      table.resetColumnFilters();
      setFilter({});
    }
  }, [mounted, setMount, setFilter, table]);

  /* TODO
    Create a loading skeleton
    Create an error state
    Look into possible performance optimization
  */
  if (isPending) return <span>wait..</span>;

  if (error) return <span>404</span>;

  return (
    <PostDataTable
      table={table}
      columns={columns}
      data={response ?? mockData}
    />
  );
}
