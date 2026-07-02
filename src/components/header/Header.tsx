import { Code2, Bell, Settings } from "lucide-react";
import IconButtonUI from "../ui/IconButtonUI";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import { TbUserUp } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import MenuUI from "./Menu";
import type { TUser } from "../../types";
import NavigationTabs from "../Navigation";
import ButtonUI from "../ui/Button";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
interface HeaderProps {
  user?: TUser;
}

export function Header({ user }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeLocation = location.pathname === "/";

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/register");
  };
  return (
    <header className="bg-white-50 border-b bg-white border-gray-200 ">
      <div className=" px-5  mx-auto ">
        <div className="lg:flex items-center md:justify-between py-1  ">
          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-1 ">
            <img src="/logo.svg" className="size-12" />
            <p className="font-bold text-3xl text-blue-500">
              Dev<span className="font-normal">Tree</span>
            </p>
          </Link>
          {user && <NavigationTabs />}
          <div className=" flex justify-between">
            {/* User Menu */}
            {user && (
              <div className="flex items-center gap-4">
                <div className="text-slate-400">
                  <IconButtonUI Icon={Bell} Color="inherit" />
                </div>
                <div className="text-slate-400">
                  <IconButtonUI Icon={Settings} Color="inherit" />
                </div>

                <MenuUI userData={user} />
              </div>
            )}
            {isHomeLocation && (
              <section className=" flex gap-2 items-center   font-semibold">
                <Link
                  to={"/login"}
                  className="  border border-green-700 text-green-700   px-4 py-2 rounded-xl ">
                  Iniciar Sesion
                </Link>
                <Link
                  to={"/Register"}
                  className=" bg-green-700 px-4 text-white py-2  border broder-green-700 rounded-xl">
                  Registrate
                </Link>
              </section>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
