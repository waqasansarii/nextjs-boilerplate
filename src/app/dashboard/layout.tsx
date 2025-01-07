import { AppSidebar } from "@/components/layout/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
        <AppSidebar />
      <div>
        {/* <SidebarTrigger /> */}
        {children}
      </div>
    </SidebarProvider>
  );
};

export default Layout;
