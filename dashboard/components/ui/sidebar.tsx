"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MenuSquare, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export interface Links {
  label: string;
  href?: string;
  icon: React.JSX.Element | React.ReactNode;
  children?: {
    label: string;
    href: string;
    icon: React.JSX.Element | React.ReactNode;
  }[];
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          'h-full hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[256px] flex-shrink-0',
          className
        )}
        animate={{ width: open ? "256px" : "64px" }}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          'border-b p-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800'
        )}
        {...props}
      >
        <div className="flex z-20 cursor-pointer hover:rotate-90 transition-transform duration-300 ease-in-out">
          <MenuSquare
            className="size-6 sm:size-8 "
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                'fixed h-full w-full inset-0 bg-white dark:bg-neutral-800 p-10 z-[100] flex flex-col justify-between',
                className
              )}
            >
              <div
                className="absolute right-6 top-6 cursor-pointer z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <X />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  active,
  className,
  ...props
}: {
  link: Links;
  active: boolean;
  className?: string;
  props?: LinkProps;
}) => {
  const { open } = useSidebar();
  const t = useTranslations("Sidebar");

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={link.href || "/"}
            className={cn(
              "flex items-center justify-start gap-2 group/sidebar p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700",
              className,
              active &&
                "font-semibold bg-gray-200 dark:bg-gray-700 text-primary",
              !open && "px-0",
            )}
            {...props}
          >
            {/* Icon */}
            <div className={cn(!open && "mx-auto")}>{link.icon}</div>

            {/* Text (visible only when sidebar is open) */}
            <motion.span
              animate={{
                display: open ? "inline-block" : "none",
                opacity: open ? 1 : 0,
              }}
              className="text-sm transition duration-150 whitespace-pre inline-block !p-0 !m-0 overflow-hidden"
            >
              {t(link.label)}
            </motion.span>
          </Link>
        </TooltipTrigger>

        {/* Tooltip content shown when sidebar is closed */}
        {!open && <TooltipContent side="right">{t(link.label)}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};

export const NestedSidebarLink = ({
  link,
  className,
}: {
  link: Links;
  className?: string;
}) => {
  const { open } = useSidebar();
  const pathname = usePathname();
  const t = useTranslations("Sidebar");

  return (
    <Accordion
      type="single"
      collapsible
      value={open ? undefined : link.label}
      className={cn("w-full", className)}
    >
      <AccordionItem value={link.label}>
        {open && (
          <AccordionTrigger
            open={open}
            className={cn(
              "w-full group/sidebar py-4 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-sm text-muted-foreground px-5",
              className,
              !open && "px-0",
            )}
          >
            <motion.span
              animate={{
                display: open ? "inline-block" : "none",
                opacity: open ? 1 : 0,
              }}
              className="font-medium uppercase transition duration-150 whitespace-pre inline-block !p-0 !m-0 overflow-hidden"
            >
              {t(link.label)}
            </motion.span>
          </AccordionTrigger>
        )}
        <AccordionContent className={cn("px-3.5", !open && "py-2")}>
          {link.children?.map((item, index) => {
            const active = pathname === item.href
            return <SidebarLink key={index} link={item} active={active} />
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
