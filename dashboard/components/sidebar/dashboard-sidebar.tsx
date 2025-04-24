"use client";

import { useNavLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import { SidebarClose, SidebarOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  NestedSidebarLink,
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "../ui/sidebar";

interface DashboardSidebarProps {
  initOpen: boolean;
}

export default function DashboardSidebar({ initOpen }: DashboardSidebarProps) {
  const navLinks = useNavLinks();
  // const { data: session } = useSession();

  const [open, setOpen] = useState(initOpen);
  const pathname = usePathname();

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between">
        <aside className="flex flex-col flex-1  hover:overflow-y-auto overflow-hidden hover:scrollbar transition-transform">
          <Logo open={open} setOpen={() => setOpen(!open)} />
          <div className="flex flex-col">
            {navLinks.map((link, index) => {
              const active = pathname === link.href;

              if (link.children) {
                return <NestedSidebarLink key={index} link={link} />;
              }

              return <SidebarLink key={index} link={link} active={active} />;
            })}
          </div>
        </aside>
        {!open && (
          <Link href="/" className="transition px-3 py-3">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
        )}
      </SidebarBody>
    </Sidebar>
  );
}

const Logo = ({ open, setOpen }: { open: boolean; setOpen: () => void }) => {
  return (
    <div className="border-b">
      <div
        className={cn(
          "flex flex-row items-center justify-between px-6 py-3 min-h-[73px]",
          !open && "px-3 py-1.5 justify-center"
        )}
      >
        {open && (
          <Link href="/" className="h-full flex-1">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
        )}
        {open ? (
          <SidebarClose
            onClick={setOpen}
            className="cursor-pointer size-6"
            strokeWidth={1}
          />
        ) : (
          <SidebarOpen
            onClick={setOpen}
            className="cursor-pointer size-6"
            strokeWidth={1}
          />
        )}
      </div>
    </div>
  );
};
