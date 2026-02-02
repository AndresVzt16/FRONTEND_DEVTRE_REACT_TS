import { User } from "lucide-react";
import type { TUser } from "../../types";
import Button from "../ui/Button";
interface Props {
  userData: TUser;
}

const Menu = ({ userData }: Props) => {
  return (
    <>
      <section className="flex items-center gap-5">
        <section>
          {/* <p className=" text-white text-sm text-right ">@{userData.handle}</p>
          <p className=" text-gray-400 text-xs">{userData.email}</p> */}
        </section>
        {userData.image ? (
          <img
            src={userData.image}
            alt=""
            className="text-gray-500 border bg-gray-100 object-cover   size-10  border-gray-600 rounded-full "
          />
        ) : (
          <User className="text-gray-500 border bg-gray-100   size-10 px-2 border-gray-600 rounded-full " />
        )}
      </section>
    </>
  );
};

export default Menu;
