import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex items-center justify-center size-full">
      <div className="flex flex-col md:flex-row w-full h-full p-2 md:p-5 gap-2 md:gap-5">
        {/* Left side (Poster section) */}
        <div className="flex items-center justify-center w-full md:w-1/2 bg-violet-400 rounded-2xl hidden md:block">
          <Image
            src="/images/454455525_1029877992478598_211190455471707951_n.jpg"
            alt="Avatar"
            width={3000}
            height={3000}
            className="w-full h-full rounded-lg"
          />
        </div>

        {/* Right side (Login section) */}
        <div className="flex items-center justify-center w-full md:w-1/2 p-5 rounded-2xl">
          {children}
        </div>
      </div>
    </main>
  );
}
