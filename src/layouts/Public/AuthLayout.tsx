import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Toaster } from "sonner";

export default function AuthLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col font-family-sans">
        <Header />

        <div className="flex-1 flex items-center bg-slate-100 w-full">
          <Outlet />
        </div>
      </div>

      <Toaster richColors position="top-right" />
    </>
  );
}
