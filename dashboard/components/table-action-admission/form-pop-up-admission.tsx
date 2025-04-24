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
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormPopUp = ({
  label,
  fields,
  defaultValues = {},
  onSubmit,
  isUpdate = false,
}: {
  label?: string;
  fields: {
    name: string;
    label: string;
    placeholder: string;
    description?: string;
    type?: string;
  }[];
  defaultValues?: any;
  onSubmit: (data: any) => void;
  isUpdate?: boolean;
}) => {
  const defaultDate = defaultValues.dateApplied
    ? new Date(defaultValues.dateApplied)
    : undefined;

  const [date, setDate] = React.useState<Date | undefined>(defaultDate);
  const form = useForm({ defaultValues: defaultValues });

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      form.setValue("dateField", format(selectedDate, "dd-MM-yyyy"));
    }
  };

  const handleSubmit = (data: any) => {
    onSubmit(data);
    if (isUpdate) {
      toast.info(`Cập nhật ${label} thành công!`);
      console.log(defaultValues);
    } else {
      toast.success(`Thêm ${label} thành công!`);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <DialogHeader>
          <DialogTitle>{isUpdate ? "Chỉnh sửa" : "Thêm mới"}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {isUpdate
            ? `Chỉnh sửa thông tin ${label}`
            : `Thêm thông tin ${label}`}
        </DialogDescription>
        {fields.map((field: any) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === "date" ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal pr-4",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-3" />
                          {date ? format(date, "dd/MM/yyyy") : "Chọn Ngày"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={handleDateSelect}
                          locale={vi}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Input
                      type={field.type || "text"} // default to text if type is not specified
                      placeholder={field.placeholder}
                      {...formField}
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
        <DialogFooter>
          <Button type="submit" className="bg-blue-600">
            Lưu thay đổi
          </Button>
        </DialogFooter>
      </form>
    </FormProvider>
  );
};

export default FormPopUp;
