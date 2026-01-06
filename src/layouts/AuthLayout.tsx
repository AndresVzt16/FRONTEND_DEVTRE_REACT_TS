import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import {Toaster} from 'sonner'


export default function AuthLayout() {
  return (
    <>
      <div className="  min-h-screen bg-gray-950 ">
        <div className=" mx-auto ">
          <Header/>
          
          <div className="font-family-sans  mx-auto ">
            <Outlet />
          </div>
        </div>
      </div>

      <Toaster richColors/>
    </>
  );
}
