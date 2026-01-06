import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import {Toaster} from 'sonner'


export default function AuthLayout() {
  return (
    <>
      <div className=" bg-white min-h-screen">
        <div className=" mx-auto ">
          <Header/>
          
          <div className="font-family-sans py-5 mx-auto ">
            <Outlet />
          </div>
        </div>
      </div>

      <Toaster richColors/>
    </>
  );
}
