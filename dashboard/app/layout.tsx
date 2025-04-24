import "./globals.css";

import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import localFont from "next/font/local";
import Providers from "@/components/providers";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Wonder CRM",
  icons: "/images/favicon.png",
};

type RootLayoutProps = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth();
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <SessionProvider session={session}>
      <html lang={locale} suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
        >
          <Providers>
            <ReactQueryProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <NextIntlClientProvider messages={messages}>
                  <NuqsAdapter>{children}</NuqsAdapter>
                </NextIntlClientProvider>
              </ThemeProvider>
            </ReactQueryProvider>
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
