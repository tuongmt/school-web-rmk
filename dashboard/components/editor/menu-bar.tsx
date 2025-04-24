import { useCallback, useRef } from "react";
import { Editor, useEditorState } from "@tiptap/react";

import {
  LucideAlignCenter,
  LucideAlignLeft,
  LucideAlignRight,
  LucideBold,
  LucideCode,
  LucideHeading,
  LucideImage,
  LucideItalic,
  LucideLink,
  LucideList,
  LucideListOrdered,
  LucideQuote,
  LucideRedo2,
  LucideRemoveFormatting,
  LucideStrikethrough,
  LucideUnderline,
  LucideUndo2,
} from "lucide-react";

import { Toggle } from "../ui/toggle";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function TiptapMenuBar({
  editor,
  onCallback,
}: {
  editor: Editor | null;
  onCallback?: React.ReactNode;
}) {
  const imageFileInputRef = useRef<HTMLInputElement | null>(null);

  const imageUrlInputRef = useRef<HTMLInputElement | null>(null);
  const linkUrlInputRef = useRef<HTMLInputElement | null>(null);

  const currentEditorState = useEditorState({
    editor,
    selector: (ctx) => ({
      isHeader: ctx.editor?.isActive("heading"),
      isBold: ctx.editor?.isActive("bold"),
      isItalic: ctx.editor?.isActive("italic"),
      isUnderline: ctx.editor?.isActive("underline"),
      isStrikethrough: ctx.editor?.isActive("strike"),
      isCode: ctx.editor?.isActive("codeBlock"),
      isQuote: ctx.editor?.isActive("blockquote"),
      isBulletList: ctx.editor?.isActive("bulletList"),
      isOrderedList: ctx.editor?.isActive("orderedList"),
      isLeftTextAligned: ctx.editor?.isActive({ textAlign: "left" }),
      isCenterTextAligned: ctx.editor?.isActive({ textAlign: "center" }),
      isRightTextAligned: ctx.editor?.isActive({ textAlign: "right" }),
      isLink: ctx.editor?.isActive("link"),
      isImage: ctx.editor?.isActive("image"),
      hasUndo: ctx.editor?.can().undo(),
      hasRedo: ctx.editor?.can().redo(),
    }),

    equalityFn: (prev, next) => {
      if (!next) {
        return false;
      }
      return (
        prev.isHeader === next.isHeader &&
        prev.isBold === next.isBold &&
        prev.isItalic === next.isItalic &&
        prev.isUnderline === next.isUnderline &&
        prev.isStrikethrough === next.isStrikethrough &&
        prev.isCode === next.isCode &&
        prev.isQuote === next.isQuote &&
        prev.isBulletList === next.isBulletList &&
        prev.isOrderedList === next.isOrderedList &&
        prev.isLeftTextAligned === next.isLeftTextAligned &&
        prev.isCenterTextAligned === next.isCenterTextAligned &&
        prev.isRightTextAligned === next.isRightTextAligned &&
        prev.isLink === next.isLink &&
        prev.isImage === next.isImage &&
        prev.hasUndo === next.hasUndo &&
        prev.hasRedo === next.hasRedo
      );
    },
  });

  const addImageFromURL = useCallback(
    ({ url, alt }: { url: string; alt: string }) => {
      if (editor && url) {
        editor
          .chain()
          .focus()
          .setImage({ src: url, alt: alt ?? "" })
          .run();
      }
    },
    [editor],
  );

  const addImageFromFile = useCallback(
    ({ file, alt }: { file: File | null; alt: string }) => {
      if (editor && file) {
        const objectUrl = window.URL.createObjectURL(file);

        editor
          .chain()
          .focus()
          .setImage({ src: objectUrl, alt: alt ?? "" })
          .run();

        window.URL.revokeObjectURL(objectUrl);
      }
    },
    [editor],
  );

  const resetFileInput = useCallback(() => {
    if (imageFileInputRef.current) {
      imageFileInputRef.current.value = "";
    }
  }, [imageFileInputRef]);

  const setLink = useCallback(
    (url: string) => {
      if (editor) {
        if (url === null) {
          return;
        }

        editor
          .chain()
          .focus()
          .extendMarkRange("link")
          .setLink({ href: url })
          .run();
      }
    },
    [editor],
  );

  const resetLink = useCallback(() => {
    if (editor && editor.getAttributes("link").href) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="flex flex-wrap border border-input rounded-t-md p-2 gap-2">
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isHeader}
        onPressedChange={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <LucideHeading size={16} className="!stroke-2" />
      </Toggle>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isBold}
        onPressedChange={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <LucideBold size={16} className="!stroke-2" />
      </Toggle>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isItalic}
        onPressedChange={() => {
          editor.chain().focus().toggleItalic().run();
        }}
      >
        <LucideItalic size={16} className="!stroke-2" />
      </Toggle>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isUnderline}
        onPressedChange={() => {
          editor.chain().focus().toggleUnderline().run();
        }}
      >
        <LucideUnderline size={16} className="!stroke-2" />
      </Toggle>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isStrikethrough}
        onPressedChange={() => {
          editor.chain().focus().toggleStrike().run();
        }}
      >
        <LucideStrikethrough size={16} className="!stroke-2" />
      </Toggle>
      <div>
        <Separator orientation="vertical" />
      </div>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isCode}
        onPressedChange={() => {
          editor.chain().focus().toggleCodeBlock().run();
        }}
      >
        <LucideCode size={16} className="!stroke-2" />
      </Toggle>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isQuote}
        onPressedChange={() => {
          editor.chain().focus().toggleBlockquote().run();
        }}
      >
        <LucideQuote size={16} className="!stroke-2" />
      </Toggle>

      <div>
        <Separator orientation="vertical" />
      </div>

      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isBulletList}
        onPressedChange={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
      >
        <LucideList size={16} className="!stroke-2" />
      </Toggle>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isOrderedList}
        onPressedChange={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <LucideListOrdered size={16} className="!stroke-2" />
      </Toggle>

      <div>
        <Separator orientation="vertical" />
      </div>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isLeftTextAligned}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("left").run()
        }
      >
        <LucideAlignLeft size={16} className="!stroke-2" />
      </Toggle>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isCenterTextAligned}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("center").run()
        }
      >
        <LucideAlignCenter size={16} className="!stroke-2" />
      </Toggle>
      <Toggle
        variant={"outline"}
        pressed={currentEditorState?.isRightTextAligned}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("right").run()
        }
      >
        <LucideAlignRight size={16} className="!stroke-2" />
      </Toggle>
      <div>
        <Separator orientation="vertical" />
      </div>

      <Button
        variant={"outline"}
        size={"icon"}
        className="px-5"
        onClick={(event) => {
          event.preventDefault();

          editor.chain().focus().clearNodes().run();
          editor.chain().focus().unsetAllMarks().run();
        }}
      >
        <LucideRemoveFormatting className="!stroke-2" size={16} />
      </Button>
      <div>
        <Separator orientation="vertical" />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"}>
            <LucideImage />
            Thêm hình
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Tabs defaultValue="url">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger className="grow" value={"url"}>
                Liên kết hình
              </TabsTrigger>
              <TabsTrigger className="grow" value={"upload"}>
                Đăng hình
              </TabsTrigger>
            </TabsList>
            <TabsContent value={"url"}>
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <Label htmlFor="imageUrl">URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    ref={imageUrlInputRef}
                  />
                  <Label htmlFor="imageAlt">Mô tả hình</Label>
                  <Input id="imageAlt" name="imageAlt" type="text" />
                </CardContent>
                <CardFooter className="p-0 mt-3">
                  <Button
                    onClick={() => {
                      const url =
                        (imageUrlInputRef &&
                          imageUrlInputRef!.current?.value) ??
                        "";
                      const alt = (
                        document.getElementById("imageAlt") as HTMLInputElement
                      ).value;

                      const metadata = { alt, url };

                      addImageFromURL(metadata);
                    }}
                  >
                    Thêm
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value={"upload"}>
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <Label htmlFor="fileImg">Chọn hình trên máy</Label>
                  <Input
                    id="fileImg"
                    type="file"
                    accept="image/png"
                    ref={imageFileInputRef}
                  />
                  <Label htmlFor="fileAlt">Mô tả hình</Label>
                  <Input id="fileAlt" name="fileAlt" type="text" />
                </CardContent>
                <CardFooter className="p-0 mt-3 space-x-3">
                  <Button
                    onClick={() => {
                      const file =
                        imageFileInputRef.current &&
                        (imageFileInputRef.current.files!.item(0) as File);
                      const alt = (
                        document.getElementById("fileAlt") as HTMLInputElement
                      ).value;

                      const metadata = { alt, file };

                      addImageFromFile(metadata);
                    }}
                  >
                    Thêm
                  </Button>
                  <Button onClick={resetFileInput}>Xoá hình</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"}>
            <LucideLink className="!w-[24px] !h-[24px]" size={16} />
            Gắn liên kết
          </Button>
        </PopoverTrigger>
        <PopoverContent className="space-y-4">
          <>
            <div>
              <Label>Liên kết</Label>
              <Input
                type="url"
                id="link"
                ref={linkUrlInputRef}
                value={editor.getAttributes("link").href}
              />
            </div>
            <div className="space-x-3">
              <Button
                onClick={() => {
                  const newUrl =
                    linkUrlInputRef.current && linkUrlInputRef.current.value;

                  setLink(newUrl!);
                }}
              >
                Thêm
              </Button>
              <Button
                onClick={() => {
                  resetLink();
                }}
              >
                Xoá liên kết
              </Button>
            </div>
          </>
        </PopoverContent>
      </Popover>
      <div>
        <Separator orientation="vertical" />
      </div>
      <Button
        className="px-5"
        variant={"outline"}
        size={"icon"}
        disabled={!currentEditorState?.hasUndo}
        onClick={() => {
          editor.chain().focus().undo().run();
        }}
      >
        <LucideUndo2 className="!stroke-2" size={16} />
      </Button>
      <Button
        className="px-5"
        variant={"outline"}
        size={"icon"}
        disabled={!currentEditorState?.hasRedo}
        onClick={() => {
          editor.chain().focus().redo().run();
        }}
      >
        <LucideRedo2 className="!stroke-2" size={16} />
      </Button>

      {/* Nút mở rộng cho dữ liệu form */}
      {onCallback && (
        <>
          <div>
            <Separator orientation="vertical" />
          </div>
          {onCallback}
        </>
      )}
    </div>
  );
}
