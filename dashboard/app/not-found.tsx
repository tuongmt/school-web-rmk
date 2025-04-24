import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-lg text-neutral-500 dark:text-neutral-400">
        Page not found
      </p>
      <Link href="/">
        <Button>Go back to home</Button>
      </Link>
    </div>
  );
}
