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

const FormPopUp = ({
  fields,
  type,
  defaultValues = {},
  onSubmit,
  isUpdate = false,
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

  const stringTypes = ["needing", "approved", "current", "declined"];

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
          fields.length > 5 ? "grid grid-cols-2 gap-8 min-w-10" : ""
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
                  {/*Kiểm tra nếu field name là một trong string types thì đổi type của input sang number*/}
                  {stringTypes.some((job) => job.includes(field.name)) ? (
                    <Input
                      type="number"
                      defaultValue={0}
                      placeholder={field.placeholder}
                      {...fieldState}
                      className="min-w-6"
                    />
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
