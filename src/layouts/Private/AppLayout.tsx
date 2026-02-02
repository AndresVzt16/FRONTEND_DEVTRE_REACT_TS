import type { TUser } from "../../types";
import NavigationTabs from "../../components/Navigation";
import { SquareActivity } from "lucide-react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import ProfileLinks from "../../views/private/ProfileView/Components/ProfileLinks";

type DevTreeProps = {
  data: TUser;
};

const AppLayout = ({ data }: DevTreeProps) => {
  return (
    <>
      <Header user={data} />

      <div className="  min-h-screen font-family-sans justify-between">
        <section className=" flex justify-center  "></section>
        <main className=" bg-slate-50 flex justify-between gap-7 w-full px-10">
          <section className="w-2/7 mt-7">
            <ProfileLinks data={data} />
            <ProfileLinks data={data} />
          </section>
          <section className="gap-2 mt-7  w-5/7 ">
            <NavigationTabs />
            <Outlet  />
          </section>
        </main>
      </div>
      <Toaster richColors position="top-right" />
    </>
  );
};

export default AppLayout;
