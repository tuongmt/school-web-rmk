"use client";

import PostPreview from "@/components/post/preview/post-preview";

import { fetchPostById } from "@/constants/mock-data/mock-post";
import { IPost } from "@/interfaces/post";

import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function PostDetailById({ params }: { params: { id: string } }) {
  const postId = params.id;
  const queryClient = useQueryClient();

  const {
    isPending,
    error,
    data: response,
  } = useQuery<IPost>({
    queryKey: ["posts", postId],
    queryFn: () => {
      return fetchPostById(postId);
    },
    initialData: () => {
      return queryClient.getQueryData(["posts", postId]) as IPost;
    },
  });

  if (isPending) return <span>wait..</span>;

  if (error) return <span>404</span>;

  return <PostPreview post={response} />;
}
