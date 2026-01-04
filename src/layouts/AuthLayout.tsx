import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function AuthLayout() {
  return (
    <>
      <div className=" bg-white min-h-screen">
        <div className=" mx-auto ">
          <Header/>
          
          <div className="font-family-sans container mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
