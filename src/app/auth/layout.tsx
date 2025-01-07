import AuthContextProvider from "@/context/auth-context";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AuthContextProvider>
      <div className="flex justify-center items-center w-full h-screen">
        {children}
      </div>
    </AuthContextProvider>
  );
};

export default Layout;
