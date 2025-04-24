'use client'

import { Ellipsis, Pencil, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
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
import FormPopUp from "@/components/table-action-admission/form-pop-up-admission";
import { useState } from "react";

interface Field {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

interface TableActionProps<T> {
  label: string
  form: T
  fields: Field[]
  onEdit: (item: T) => void
}
const TableAction = <T,>({
  label,
  form,
  fields,
  onEdit,
}: TableActionProps<T>) => {
  const [selectedForm] = useState(form)
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = () => {
    toast.error(`Xóa ${label} thành công!`)
  }

  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Ellipsis className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-0">
        <DropdownMenuLabel>Hoạt động</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="w-full">
            <DropdownMenuItem onClick={() => onEdit(form)}>
              <Pencil />
              Sửa {label}
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            {selectedForm && (
              <FormPopUp
                label={label}
                fields={fields}
                defaultValues={selectedForm}
                onSubmit={handleSubmit}
                isUpdate
              />
            )}
          </DialogContent>
        </Dialog>
        <AlertDialog>
          <AlertDialogTrigger className="w-full">
            <DropdownMenuItem>
              <Trash2 />
              Xóa {label}
            </DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Bạn có muốn xóa {label} này không?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Hành động này sẽ không thể hoàn tác.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
              <AlertDialogAction className="bg-red-600" onClick={handleDelete}>
                Xác nhận
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableAction
