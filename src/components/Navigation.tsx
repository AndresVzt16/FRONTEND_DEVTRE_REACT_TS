import { User, LinkIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const tabs = [
  { name: "Mi Perfil", href: "/admin", icon: User },
  { name: "Links", href: "/admin/links", icon: LinkIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationTabs() {
  const location = useLocation();

  return (
    <div className=" ">


      <div className=" ">
        <div className="">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href}
                className={classNames(
                  location.pathname === tab.href
                    ? "border-blue-500 text-blue-500 "
                    : "border-transparent text-gray-500 transition-all hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex font-semibold items-center  py-4 px-6 text-sm"
                )}>
                <tab.icon
                  className={classNames(
                    location.pathname === tab.href
                      ? "text-blue-500 "
                      : "text-gray-500 group-hover:text-gray-500",
                    "-ml-0.5 mr-2 size-5 transition-all"
                  )}
                  aria-hidden="true"
                />
               
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
