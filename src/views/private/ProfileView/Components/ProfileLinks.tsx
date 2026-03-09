import { useEffect, useState } from "react";
import type { TUser } from "../../../../types";
import { Calendar, Image } from "lucide-react";
import type { SocialNetwork } from "../../../../types";
import CardLink from "./CardLink";
import TagInformation from "./TagInformation";
import { AiOutlineUser } from "react-icons/ai";
import Divider from "@mui/material/Divider";
interface propsProfile {
  data: TUser;
}

const ProfileLinks = ({ data }: propsProfile) => {
  const [links, setLinks] = useState(
    JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled),
  );
  const [date, setDate] = useState(new Date(data.createdAt));
  const [modificationDate, setModificationDate] = useState(
    new Date(data.updatedAt),
  );

  useEffect(() => {
    setLinks(JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled))
  },[data])
  return (
    <>
      <article className="  py-5  ">
        <section className=" flex items-center gap-2">
          {data.image ? (
            <img
              src={`${data.image}?t=${Date.now()}`}
              alt=""
              className="size-10 object-cover  rounded-full "
            />
          ) : (
            <Image className=" text-gray-300 size-10" />
          )}
          <section className=" space-y-1.5">
            <h2 className="text-gray-900  text-center text-sm font-semibold">
              {data.name}
            </h2>
            <p className="text-green-500 text-xs ">@{data.handle}</p>
            {/* <p className="text-gray-700 text-sm text-center ">
            {data.description}
          </p> */}
          </section>
        </section>

        <section className="flex flex-wrap  gap-2.5 my-10  ">
          <h2 className=" text-sm font-semibold text-neutral-700">
            Datos Informativos
          </h2>
          <TagInformation
            Label={"Miembro desde"}
            color={"bg-gray-50"}
            value={date.getFullYear()}
            Icon={AiOutlineUser}
          />

          <TagInformation
            Label={"Ultima actualizacion"}
            color="bg-gray-50"
            value={modificationDate.getFullYear()}
            Icon={Calendar}
          />
        </section>
        <Divider />

        <section className=" grid grid-cols-1 gap-2.5 my-5">
          <h2 className=" text-sm font-semibold text-neutral-800">
            Enlaces disponibles
          </h2>
          {links.map((link: SocialNetwork) => (
            <CardLink data={link} key={link.name}  />
          ))}
          <p></p>
        </section>
      </article>
    </>
  );
};

export default ProfileLinks;
