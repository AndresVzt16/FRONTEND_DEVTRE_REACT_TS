import type { SocialNetwork, TUser } from "../../../../types";
import TagInformation from "./TagInformation";
import { useEffect, useState } from "react";
import CardLink from "./CardLink";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { TiWorldOutline } from "react-icons/ti";

import { MdOutlineRememberMe } from "react-icons/md";

import type { TagSkill } from "../../../../types";
import Chip from "@mui/material/Chip";
type ImagenProps = {
  data: TUser;
};
const ImageProfile = ({ data }: ImagenProps) => {
  const [date, setDate] = useState(new Date(data.createdAt));
  const [links, setLinks] = useState(
    JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled),
  );
  const [skills, setSkills] = useState(JSON.parse(data.tags));

  useEffect(() => {
    setLinks(
      JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled),
    );
    setSkills(JSON.parse(data.tags))
  }, [data]);
  return (
    <>
      <article className="p-5 my-5  bg-white aspect-square shadow rounded-2xl ">
        <section className=" w-fit rounded-full border-2 border-gray-400 mx-auto ">
          <img
            src={data.image}
            alt=""
            className="size-36 rounded-full mx-auto object-cover "
          />
        </section>
        <section className=" flex justify-center space-y-2 flex-col items-center my-5">
          <h2 className=" font-semibold text-gray-800 text-xl">{data.name}</h2>
          <span className="  text-blue-500  text-sm">@{data.handle}</span>
          <span className="  text-gray-500  text-sm flex">
            <IoLocationOutline className="size-4 text-green-400"/>{data.location}</span>
          <span className="  text-gray-500 text-justify line text-sm">
            {data.description}
          </span>
        </section>
        <section className="flex gap-2.5 flex-wrap my-5">
          {skills.map((item: TagSkill) => (
            <Chip
              label={`# ${item.skill}`}
              size="small"
              color="info"
              variant="outlined"
              title={item.skill}
              key={item.skill}
            />
          ))}
        </section>
     

        <section className="flex flex-col space-y-2.5 my-2.5">
          <TagInformation
          Icon={MdOutlineRememberMe}
            Label="Miembro desde"
            color="bg-white"
            value={date.getFullYear()}
          />
        </section>

        <section className="flex flex-col space-y-2.5">
          {links.map((link: SocialNetwork) => (
            <CardLink data={link} key={link.name} />
          ))}
        </section>
      </article>
    </>
  );
};

export default ImageProfile;
