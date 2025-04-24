import React from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const FormPopUp = ({
  fields,
  type,
  defaultValues = {},
  onSubmit,
  isUpdate = false,
  jobs,
}: {
  fields: {
    name: string;
    label: string;
    placeholder: string;
    description?: string;
  }[];
  type?: string;
  defaultValues?: any;
  onSubmit: (data: any) => void;
  isUpdate?: boolean;
  jobs: string[];
}) => {
  const form = useForm({
    defaultValues: defaultValues,
  });

  const handleSubmit = (data: any) => {
    console.log("Product data submitted:", data);
    onSubmit(data);
    toast.success(
      isUpdate ? "Form updated successfully!" : "Form added successfully!",
    );
  };

  return (
    <FormProvider {...form}>
      <DialogHeader className="flex flex-col items-center text-center">
        <DialogTitle>{isUpdate ? "Chỉnh sửa" : "Thêm mới"}</DialogTitle>
        <DialogDescription>
          {isUpdate ? `Chỉnh sửa thông tin ${type}` : `Thêm thông tin ${type}`}
        </DialogDescription>
      </DialogHeader>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`flex flex-col gap-3 ${
          fields.length > 7 ? "grid grid-cols-4 gap-8 min-w-10" : ""
        }`}
      >
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ fieldState }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {/* Nếu field là sentDate hoặc interviewDate thì đổi type sang date*/}
                  {field.name === "sentDate" ||
                  field.name === "interviewDate" ? (
                    <Input
                      type="date"
                      placeholder={field.placeholder}
                      {...fieldState}
                      className="min-w-6"
                    />
                  ) : field.name === "job" ? (
                    <Select defaultValue="Chọn công việc">
                      <SelectTrigger>
                        <SelectValue placeholder={field.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {jobs.map((job, index) => (
                          <SelectItem key={index} value={job}>
                            {job}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : field.name === "email" ? (
                    <Input
                      type="email"
                      placeholder={field.placeholder}
                      {...fieldState}
                      className="min-w-6"
                    />
                  ) : field.name === "status" ? (
                    <Select defaultValue="Chờ duyệt">
                      <SelectTrigger>
                        <SelectValue placeholder={field.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Đã duyệt">Đã duyệt</SelectItem>
                        <SelectItem value="Chờ duyệt">Chờ duyệt</SelectItem>
                        <SelectItem value="Đã sắp lịch">Đã sắp lịch</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      placeholder={field.placeholder}
                      {...fieldState}
                      className="min-w-6"
                    />
                  )}
                </FormControl>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <DialogFooter className="col-span-2">
          <Button type="submit" className="bg-blue-600">
            Lưu thay đổi
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default FormPopUp;
