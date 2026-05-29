import type { TUser } from "../../types";
import { Header } from "../../components/header/Header";
import ImageProfile from "../../views/private/ProfileView/Components/ImageProfile";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import ProfileLinks from "../../views/private/ProfileView/Components/ProfileLinks";
import Skeleton from "@mui/material/Skeleton";
import {useAuth, SignOutButton, Show} from '@clerk/react'

type DevTreeProps = {
  data: TUser;
};

const AppLayout = ({ data }: DevTreeProps) => {

  return (
    <>
      <div className=" font-family-sans  justify-between ">
        {/* <section className="w-fit">
          <Sidebar />
        </section> */}
        <section className="col-span-12">
          <Header user={data} />
        </section>

        <main className=" px-5 lg:grid grid-cols-12 gap-5   flex-1 bg-slate-50 min-h-[70vh]  ">
          <section className="col-span-3 ">
            {data ? (
              <ProfileLinks data={data} />
            ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )}
          </section>
          <section className="col-span-6 ">
            <Outlet />
          </section>
          <section className="col-span-3">
            <ImageProfile data={data} />
          </section>
        </main>
      </div>
      <Toaster richColors position="top-right" />
    </>
  );
};

export default AppLayout;
