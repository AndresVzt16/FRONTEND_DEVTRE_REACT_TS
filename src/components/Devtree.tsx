import type { TUser } from "../types";
import NavigationTabs from "./Navigation";
import { User, SquareActivity } from "lucide-react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

type DevTreeProps = {
  data: TUser;
};

const Devtree = ({ data }: DevTreeProps) => {
  return (
    <>
      <Header />
      <div className="  min-h-screen font-family-sans">
        <NavigationTabs />
        <main className="px-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 ">
              <section className=" flex items-center gap-2 mt-2">
                <SquareActivity className=" size-5 text-lime-700"/>
                <p>Panel de control</p>
              </section>
              <Outlet />
            </div>
            <div className="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6"></div>
          </div>
        </main>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default Devtree;
