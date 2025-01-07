"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { logout, userDetail } from "@/lib/services/auth-api";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Add blog",
    url: "/dashboard/create-blog",
    icon: Inbox,
  },
  //   {
  //     title: "Calendar",
  //     url: "#",
  //     icon: Calendar,
  //   },
  //   {
  //     title: "Search",
  //     url: "#",
  //     icon: Search,
  //   },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = async () => {
    // let res = await userDetail();
    let res = await logout();
    console.log(res)
    if (res.status === 200) {
      router.refresh();
    }
  };
  // const {} = useSidebar()

  // console.log(pathname)
  return (
    <Sidebar>
      <SidebarHeader className="text-center font-semibold text-2xl">
        Blogify
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mt-4">
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="text-xl">
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    // disabled={pathname === item.url}
                    aria-disabled={pathname === item.url}
                    className=" aria-disabled:opacity-1"
                  >
                    <Link href={item.url} className="py-2 h-12">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <SidebarGroup /> */}
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={handleLogout}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
