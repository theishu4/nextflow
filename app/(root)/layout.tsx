import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared//LeftSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="background-light850_dark100 relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col sm:flex-row">
        <LeftSidebar />
        <section className="relative flex min-h-[2000px] flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <main className="mx-auto w-full max-w-5xl">
            <div className="absolute left-1/2 top-0">At very top</div>
            {children}
          </main>
        </section>
        {/* RightSidebar */}
      </main>
      {/* Toaster */}
    </div>
  );
};
export default Layout;
