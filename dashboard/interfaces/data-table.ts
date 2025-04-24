import { ColumnDef, Table } from "@tanstack/react-table";

export interface IDataTable<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  table: Table<TData>;
  // Cần định nghĩa thêm
  data?: {
    data: TData[];
    rowCount: number; // hoặc định nghĩa trả số tổng document trong collection của mongo
  } | TData[];
}
