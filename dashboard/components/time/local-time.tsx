"use client";

import { Suspense, useEffect, useState } from "react";

//https://francoisbest.com/posts/2023/displaying-local-times-in-nextjs
export function LocalTime({ date }: { date: Date }) {
  const [mounted, isMounted] = useState<boolean>(false);

  useEffect(() => {
    isMounted(true);
  }, []);

  return (
    <Suspense key={mounted ? "local" : "utc"}>
      <time dateTime={date.toISOString()}>
        {date.toLocaleDateString()}
        {mounted ? "" : " (UTC)"}
      </time>
    </Suspense>
  );
}
