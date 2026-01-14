import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import {Toaster} from 'sonner'


export default function AuthLayout() {
  return (
    <>
      <div className="  min-h-scree ">
        <div className=" mx-auto  font-family-sans">
          <Header/>
          
          <div className="font-family-sans  mx-auto ">
            <Outlet />
          </div>
        </div>
      </div>

      <Toaster richColors position="top-right"/>
    </>
  );
}
