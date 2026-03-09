import { Code2, Bell, Settings } from "lucide-react";
import IconButtonUI from "../ui/IconButtonUI";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import MenuUI from "./Menu";
import type { TUser } from "../../types";
import NavigationTabs from "../Navigation";
interface HeaderProps {
  user?: TUser;
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="bg-white-50 border-b border-gray-200 ">
      <div className=" px-5  mx-auto ">
        <div className="lg:flex items-center md:justify-between  min-h-14  ">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">
                <span className="text-green-600">Dev</span>
                <span className="text-sky-500">Tree</span>
              </span>
            </div>
          </div>
          <div className=" flex justify-between">
            {user && <NavigationTabs />}

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
          </div>
        </div>
      </div>
    </header>
  );
}
