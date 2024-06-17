import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
   children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
   return (
      <div className="p-[1rem] bg-[#F6F7F8] min-h-[100vh]">
         <Header />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
