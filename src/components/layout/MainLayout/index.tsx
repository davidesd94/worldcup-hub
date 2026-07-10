import type { ReactNode } from "react";
import Sidebar from "../Sidebar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* Glow Verde */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-96
          w-96
          rounded-full
          bg-green-500/10
          blur-[140px]
        "
      />

      {/* Glow Azul */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-sky-500/10
          blur-[180px]
        "
      />

      <Sidebar />

      <main className="relative z-10 flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;