import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Toaster } from "sonner";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div className=" font-family-sans">
        <div className="bg-slate-50">
          <Outlet />
        </div>
      </div>

      <Toaster richColors position="top-right" />
    </>
  );
}
