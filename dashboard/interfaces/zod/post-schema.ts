import { ACCEPTED_MIME_TYPES } from "@/constants/image_type";
import { z, ZodType } from "zod";
import { IFilterPost, IPost } from "../post";

export const postFormSchema = z.object({
  id: z.string().optional(),
  title: z
    .string({ required_error: "Hãy ghi tiêu đề bài viết" })
    .min(10, { message: "Tiêu đề quá ngắn" })
    .max(100, { message: "Tiêu đề quá dài" }),
  content: z
    .string({ required_error: "Hãy ghi nội dung bài viết" })
    .min(10, { message: "Nội dung quá ngắn" }),
  language: z
    .string({ required_error: "Vui lòng chọn ngôn ngữ của bài viết" })
    .min(1, { message: "Vui lòng chọn ngôn ngữ của bài viết" }),
  tags: z
    .string()
    .array()
    .nonempty({ message: "Vui lòng chọn một hay nhiều từ khoá" })
    .min(1, { message: "Vui lòng chọn một hay nhiều từ khoá" }),
  category: z
    .string({ required_error: "Vui lòng chọn một danh mục" })
    .min(1, { message: "Vui lòng chọn một danh mục" }),
  isActive: z.boolean(),
  thumbnail:
    typeof window === "undefined"
      ? z.any().optional()
      : z
          .union([z.instanceof(FileList), z.instanceof(File)])
          .optional()
          .superRefine((value, ctx) => {
            if (
              (value as FileList).item(0) &&
              !ACCEPTED_MIME_TYPES.includes((value as FileList).item(0)!.type)
            ) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Chỉ chấp nhận ảnh định dạng ${ACCEPTED_MIME_TYPES.join(", ")}`,
              });
            }
          }),
  createdAt: z.date(),
  updatedAt: z.date(),
}) satisfies ZodType<IPost>;

export const postFilterSchema = z.object({
  title: z.string().optional(),
  tag: z.string().optional(),
  category: z.string().optional(),
  language: z.string().optional(),
  from: z.union([z.date().optional(), z.string().optional()]),
  to: z.union([z.date().optional(), z.string().optional()]),
}) satisfies ZodType<IFilterPost>;
