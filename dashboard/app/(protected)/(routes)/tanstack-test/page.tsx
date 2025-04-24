"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function APITest() {
  const [isShowing, showIt] = useState<boolean>(false);

  /* 
    Mở server, MongoDB và MinIO trước
    Vô http://localhost:8080/swagger
    Kiếm /auth/login
    Nhập vào:
      triensteam102@gmail.com
      newPassword123
    Sao chép token trong response body và gắn dưới đây
   */

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MWNiNjMyOWJkMGE2YzBjMzIxNGNjYyIsImVtYWlsIjoidHJpZW5zdGVhbTEwMkBnbWFpbC5jb20iLCJ0d29GYWN0b3JFbmFibGVkIjpmYWxzZSwiaWF0IjoxNzMwNTg3OTgxLCJleHAiOjE3MzA2NzQzODF9.Q7DP64Ud572l8rqLM7XyCSKyYchMRvtR5ADnhsMkBtc";

  const endpoint = "post";
  // https://tanstack.com/query/latest/docs/framework/react/reference/useQuery
  const {
    isPending,
    error,
    data: queryRes,
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      try {
        const response = await fetch(`http://localhost:8080/${endpoint}`, {
          method: "GET",
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status >= 200) return response.json();
      } catch (error) {
        return error;
      }
    },
  });

  // Đang lấy dữ liệu
  if (isPending) return <span>Fetching...</span>;
  // Nếu có lỗi
  if (error) return <span>{queryRes}</span>;

  return (
    <>
      <Button
        onClick={() => {
          showIt(!isShowing);
          console.log(queryRes.data);
        }}
      >
        Get the thing
      </Button>
      <div className={`${isShowing ? "block" : "hidden"}`}>
        {(queryRes.data as any[]).map((data) => (
          <div key={data.id}>{data.content}</div>
        ))}
      </div>
    </>
  );
}
