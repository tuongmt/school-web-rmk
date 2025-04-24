import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useState } from "react";
import { FormType } from "@/types/form-type";

interface Field {
  name: string;
  label: string;
  placeholder: string;
}

interface TableActionProps {
  form: FormType;
  fields: Field[];
  onEdit: (form: FormType) => void;
  onDelete: () => void;
}

const TableAction = ({ form, fields, onEdit, onDelete }: TableActionProps) => {
  const handleDelete = () => {
    onDelete();
    toast.error("Xóa biểu mẫu thành công!");
  };

  return (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Ellipsis className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0">
          <DropdownMenuLabel>Table Action</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => onEdit(form)}>
            <Pencil />
            Sửa biểu mẫu
          </DropdownMenuItem>

          <AlertDialog>
            <AlertDialogTrigger className="w-full">
              <DropdownMenuItem>
                <Trash2 />
                Xóa biểu mẫu
              </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Bạn có muốn xóa biểu mẫu này không?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Hành động này sẽ không thể hoàn tác.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600"
                  onClick={handleDelete}
                >
                  Xác nhận
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TableAction;
