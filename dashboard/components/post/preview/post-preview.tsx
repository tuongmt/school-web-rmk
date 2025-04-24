import { LocalTime } from "@/components/time/local-time";
import { LucideClock } from "lucide-react";

import { IPost } from "@/interfaces/post";

import parse from "html-react-parser";

export default function PostPreview({ post }: { post: IPost }) {
  const parsedStringToHTML = parse(post.content);

  return (
    <div className="size-full max-w-[1200px] m-auto">
      <h1>{post.title ?? "Chưa có tiêu đề"}</h1>
      <div className="flex items-center gap-2">
        <LucideClock size={16} />
        <LocalTime date={new Date(post.createdAt)} />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="grow md:basis-[900px]">{parsedStringToHTML}</div>
        <aside className="grow md:basis-[300px]">
          <h3>Các tin khác</h3>
        </aside>
      </div>
    </div>
  );
}
