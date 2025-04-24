import { Links } from "@/components/ui/sidebar";
import {
  ClipboardListIcon,
  ComponentIcon,
  LanguagesIcon,
  LayoutDashboardIcon,
  LayoutTemplateIcon,
  LucideNewspaper,
  UsersRoundIcon,
} from "lucide-react";
import { useSession } from "next-auth/react";

export function useNavLinks() {
  const { data: session } = useSession();

  // const role = session?.user?.userRoles?.role.name;

  const navLinks: Links[] = [
    {
      label: "general",
      icon: <LayoutDashboardIcon />,
      children: [
        {
          label: "dashboard",
          href: "/",
          icon: <LayoutDashboardIcon />,
        },
      ],
    },
    // ...(role === "admin"
    //   ? [
    {
      label: "website-content",
      icon: <LayoutDashboardIcon />,
      children: [
        {
          label: "post",
          href: "/posts",
          icon: <LucideNewspaper />,
        },
        {
          label: "banner",
          href: "/banners",
          icon: <LayoutTemplateIcon />,
        },
      ],
    },
    // ]
    // : []),
    {
      label: "student-list-and-registration",
      icon: <LayoutDashboardIcon />,
      children: [
        {
          label: "admission-registration",
          href: "/manage-admissions",
          icon: <ClipboardListIcon />,
        },
        {
          label: "consultation-registration",
          href: "/manage-consultations",
          icon: <ClipboardListIcon />,
        },
      ],
    },
    {
      label: "academic-data",
      icon: <LayoutDashboardIcon />,
      children: [
        {
          label: "form",
          href: "/manage-forms",
          icon: <ComponentIcon />,
        },
        {
          label: "training-program",
          href: "/manage-training-programs",
          icon: <ComponentIcon />,
        },
      ],
    },
    {
      label: "document-and-regulation",
      icon: <LayoutDashboardIcon />,
      children: [
        {
          label: "school-document",
          href: "/manage-school-documents",
          icon: <ComponentIcon />,
        },
        {
          label: "regulation",
          href: "/manage-regulations",
          icon: <ComponentIcon />,
        },
      ],
    },
    {
      label: "recruitment",
      icon: <LayoutDashboardIcon />,
      children: [
        {
          label: "staff-recruitment",
          href: "/manage-recruitment",
          icon: <UsersRoundIcon />,
        },
      ],
    },
    {
      label: "language",
      icon: <LayoutDashboardIcon />,
      children: [
        {
          label: "multilingual",
          href: "/manage-languages",
          icon: <LanguagesIcon />,
        },
      ],
    },
  ];

  return navLinks;
}
