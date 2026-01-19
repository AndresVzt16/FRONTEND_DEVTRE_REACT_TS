import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "../components/header/Header";
import NavigationTabs from "../components/Navigation";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/Services";
import { useNavigate } from "react-router-dom";
export default function AppLayout() {
  const { data, isLoading, error, isError } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
    retry: 1,
    refetchOnWindowFocus: false,
  });
  const navigate = useNavigate();
  if (isLoading) return "...Cargando";
  if (isError) {
    return navigate("/auth/login");
  }
  return (
    <>
      <Header />
      <div className="  min-h-screen font-family-sans">
        <NavigationTabs />
        <main className="px-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 ">
              <Outlet />
            </div>
            <div className="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6"></div>
          </div>
        </main>
      </div>
      <Toaster position="top-right" />
    </>
  );
}
