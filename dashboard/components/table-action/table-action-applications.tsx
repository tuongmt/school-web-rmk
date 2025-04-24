"use client";

import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
import FormPopUp from "@/components/form-pop-up/form-pop-up";
import { useState } from "react";

interface Form {
  no: string;
  name: string;
  job: string;
  email: string;
  phone: string;
  cvURL: string;
  coverLetter: string;
  status: string;
  sentDate: string;
  interviewDate: string;
  note: string;
  address: string;
}

interface Field {
  name: string;
  label: string;
  placeholder: string;
}

interface TableActionProps {
  form: Form;
  fields: Field[];
  onEdit: (form: Form) => void;
}

const TableAction = ({ form, fields, onEdit }: TableActionProps) => {
  const [selectedForm] = useState(form);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    toast.error("Xóa ứng viên thành công!");
  };

  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Ellipsis className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-0">
        <DropdownMenuLabel>Chức năng</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="w-full">
            <DropdownMenuItem onClick={() => onEdit(form)}>
              <Eye />
              Xem chi tiết
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            {selectedForm && (
              <FormPopUp
                fields={fields}
                defaultValues={selectedForm}
                onSubmit={handleSubmit}
                isUpdate
              />
            )}
          </DialogContent>
        </Dialog>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="w-full">
            <DropdownMenuItem onClick={() => onEdit(form)}>
              <Pencil />
              Sửa thông tin
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            {selectedForm && (
              <FormPopUp
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
              Xóa ứng viên
            </DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Bạn có muốn xóa ứng viên này không?
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

export default TableAction;
