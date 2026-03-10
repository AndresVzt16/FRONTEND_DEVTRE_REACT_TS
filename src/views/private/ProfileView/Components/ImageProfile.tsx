import type { SocialNetwork, TUser } from "../../../../types";
import { IoPersonAddOutline } from "react-icons/io5";
import TagInformation from "./TagInformation";
import { CiShare2, } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { MdOutlineBlock } from "react-icons/md";
import { useEffect, useState } from "react";
import CardLink from "./CardLink";
import IconButtonUI from "../../../../components/ui/IconButtonUI";
type ImagenProps = {
  data: TUser;
};
const ImageProfile = ({ data }: ImagenProps) => {
  const [date, setDate] = useState(new Date(data.createdAt))
  const [links, setLinks] = useState(JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled))

  useEffect(() => {
    setLinks(JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled))
  },[data])
  return (
    <>
      <article className="p-5 my-5  bg-white aspect-square shadow rounded-2xl ">
        <section className=" w-fit rounded-full border-2 border-gray-400 mx-auto ">
        <img src={data.image} alt="" className="size-36 rounded-full mx-auto object-cover " />
        </section>
        <section className=" flex justify-center space-y-2 flex-col items-center my-5">
          <h2 className=" font-semibold text-gray-800 text-xl">{data.name}</h2>
          <span className="  text-blue-500  text-sm">@{data.handle}</span>
          <span className="  text-gray-800 text-sm">{data.description}</span>
        </section>
        <section className="flex  flex-wrap justify-evenly">
          <IconButtonUI Icon={CiShare2} Color="info"/>
          <IconButtonUI Icon={GoCopy} Color="info"/>
          <IconButtonUI Icon={IoPersonAddOutline} Color="info"/>
          <IconButtonUI Icon={MdOutlineBlock} Color="error"/>
          
        </section>
        <section className="flex flex-col space-y-2.5 my-2.5">
          <TagInformation Label="Miembro desde" color="bg-white" value={date.getFullYear()}/>
        </section>

        <section className="flex flex-col space-y-2.5">
          {links.map((link: SocialNetwork) => (
            <CardLink data={link} key={link.name}   />
          ))}
        </section>
      </article>
    </>
  );
};

export default ImageProfile;
