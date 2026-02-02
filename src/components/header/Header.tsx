import type { TUser } from "../../types";
import Menu from "./Menu";

interface Props {
  user?: TUser;
}

const Header = ({ user }: Props) => {
  return (
    <nav className="bg-slate-900 w-full flex py-1 px-10 justify-between items-center">
      <section className="flex items-center gap-2 py-2">
        <img src="/logo.svg" className="w-12" alt="logo Devtree" />
        <p className="text-3xl text-lime-50 font-medium">
          Dev<span className="font-bold text-blue-500">Tree</span>
        </p>
      </section>
      <section>
        {user && <Menu userData={user} />}
        {/* aquí ya puedes usar user si quieres */}
        {/* {user.name} */}
      </section>
    </nav>
  );
};

export default Header;
