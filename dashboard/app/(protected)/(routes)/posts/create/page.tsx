"use client";

/* TODO
  Thay đổi cách thanh chọn nhiều từ khoá được tạo kiểu (MultiSelector)
  Đổi thiết kế form hoặc editor hiện tại sang thành tab thay vì nút Xem trước bài viết:
  - Editing (Đang viết)
  - Preview (Xem trước)
*/
import Image from "next/image";

import PostPreview from "@/components/post/preview/post-preview";
import TiptapEditor from "@/components/editor/tiptap";

import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "@/components/ui/multi-select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { categoryOptions } from "@/constants/post-form-options/categories";
import { languageOptions } from "@/constants/post-form-options/languages";
import { tagOptions } from "@/constants/post-form-options/tags";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { ChevronLeft, X } from "lucide-react";

import { IPost } from "@/interfaces/post";
import { postFormSchema } from "@/interfaces/zod/post-schema";

export default function CreatePost() {
  const [isPreview, setPreview] = useState<boolean>(false);
  const [image, setImage] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: "",
      language: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet imperdiet metus mattis tristique. Vestibulum iaculis, arcu non congue viverra, nisi leo sollicitudin risus, iaculis rutrum nulla eros quis ante. Pellentesque eleifend magna urna, et aliquam lacus dignissim a. In sit amet ullamcorper ex. Donec metus mi, dictum eu ipsum nec, pellentesque aliquam nulla. Nulla facilisi. Curabitur commodo ultricies justo, pellentesque placerat diam hendrerit sit amet. ",
      category: "",
      tags: [],
      thumbnail: undefined,
      isActive: false,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
  });

  // https://scribe.rip/@damien_16960/input-file-x-shadcn-x-zod-88f0472c2b81
  const fileInputRef = form.register("thumbnail");

  const addImageFromFile = (file: File | undefined) => {
    const objectUrl = file && window.URL.createObjectURL(file);
    setImage(objectUrl);
    window.URL.revokeObjectURL(image!);
  };

  async function onSubmit(values: z.infer<typeof postFormSchema>) {
    document.querySelectorAll("*").forEach((x) => {
      let tagName = "</" + x.tagName + ">";
      if (
        x.outerHTML.slice(tagName.length).toUpperCase() == tagName &&
        /[^\s]/.test(x.innerHTML)
      ) {
        x.remove();
      }
    });

    // https://stackoverflow.com/a/77010965
    // Delete empty HTML tag
    const sanitizeHTML = values.content.replace(
      /<([A-z]+)([^>^/]*)>\s*<\/\1>/gim,
      "",
    );

    form.setValue("content", sanitizeHTML, {
      shouldValidate: true,
    });

    console.log(values);
  }

  if (isPreview)
    return (
      <>
        <Button
          variant={"ghost"}
          className="w-fit"
          onClick={() => {
            setPreview(false);
          }}
        >
          <ChevronLeft />
          Quay về trình soạn thảo văn bản
        </Button>

        <PostPreview post={form.getValues()} />
      </>
    );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-4"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => {
            return (
              <FormItem className="order-1 lg:order-none space-y-0 w-full">
                <FormControl>
                  <TiptapEditor
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <div className="basis-[250px] shrink-0 space-y-3">
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Hình thumbnail</FormLabel>
                  <FormControl>
                    <>
                      <Input
                        type="file"
                        accept="image/*"
                        {...fileInputRef}
                        onChange={(event) => {
                          field.onChange(() => {
                            event.target?.files?.[0] ?? undefined;
                          });

                          const file = event.target?.files?.[0];
                          console.log(file);
                          addImageFromFile(file);
                        }}
                      />
                      <Image
                        src={image ?? `/images/vlsc.jpg`}
                        alt={
                          "Default thumbnail depicting the logo and name of the school for the article"
                        }
                        height={0}
                        width={250}
                        priority
                        className="w-auto h-[160px]"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Tiêu đề</FormLabel>
                  <FormControl>
                    <Input placeholder="Đặt tên tiêu đề bài viết" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Ngôn ngữ</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value as string}
                  >
                    <SelectTrigger
                      className={`${field.value ? "" : "text-muted-foreground"}`}
                    >
                      <SelectValue placeholder="Chọn ngôn ngữ" />
                    </SelectTrigger>
                    <SelectContent>
                      {languageOptions.map((lang) => {
                        return (
                          <SelectItem key={lang.value} value={lang.value}>
                            {lang.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Từ khoá</FormLabel>
                  <MultiSelector
                    onValuesChange={field.onChange}
                    values={field.value}
                    className="space-y-0 text-sm"
                  >
                    <MultiSelectorTrigger className="border border-input">
                      <MultiSelectorInput asChild>
                        <div
                          className={`flex text-nowrap justify-between items-center w-full text-muted-foreground`}
                        >
                          {field.value.length === 0
                            ? "Chọn từ khoá"
                            : "Chọn từ khoá ở đây"}
                          <div className="flex gap-2 items-center">
                            {field.value.length > 0 ? (
                              <button
                                onClick={() => {
                                  field.value.length = 0;
                                  return;
                                }}
                                className="cursor-pointer hover:bg-input rounded px-1"
                              >
                                <X size={16} />
                              </button>
                            ) : null}

                            <CaretSortIcon
                              className={`mr-2 w-[16px] h-[16px] ${!field.value.length ? "opacity-50" : "opacity-80"}`}
                            />
                          </div>
                        </div>
                      </MultiSelectorInput>
                    </MultiSelectorTrigger>
                    <MultiSelectorContent className="shadow-md">
                      <MultiSelectorList>
                        {tagOptions.map((tag) => (
                          <MultiSelectorItem value={tag.label} key={tag.value}>
                            <span>{tag.label}</span>
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Danh mục</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value as string}
                  >
                    <SelectTrigger
                      className={`${field.value ? "" : "text-muted-foreground"}`}
                    >
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((category) => {
                        return (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => {
              return (
                <FormItem className="flex space-x-3 space-y-0 rounded-md py-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="flex flex-col gap-2">
                    <FormLabel>Công khai bài viết</FormLabel>
                    <FormDescription>
                      Bài sẽ được công khai trên trang trường nếu được tích dấu
                    </FormDescription>
                  </div>
                </FormItem>
              );
            }}
          />
          <Button type="submit" className="w-full">
            Đăng bài
          </Button>
          <Button
            variant={"outline"}
            className="w-full"
            onClick={(e) => {
              e.preventDefault();

              setPreview(!isPreview);
            }}
          >
            Xem trước bài viết
          </Button>
        </div>
      </form>
    </Form>
  );
}
