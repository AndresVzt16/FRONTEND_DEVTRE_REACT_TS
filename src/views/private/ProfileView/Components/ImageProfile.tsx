import type { SocialNetwork, TUser } from "../../../../types";
import TagInformation from "./TagInformation";
import { useEffect, useState } from "react";
import CardLink from "./CardLink";
import { DndContext, type DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { IoLocationOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useQueryClient } from "@tanstack/react-query";
import { MdOutlineRememberMe } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import type { TagSkill } from "../../../../types";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
type ImagenProps = {
  data: TUser;
};
const ImageProfile = ({ data }: ImagenProps) => {
  const queryClient = useQueryClient();
  const [date, setDate] = useState(new Date(data.createdAt));
  const [links, setLinks] = useState<SocialNetwork[]>(
    JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled),
  );

  const [skills, setSkills] = useState(JSON.parse(data.tags));

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (over && over.id) {
      const prevIndex = links.findIndex((link) => link.id === active.id);
      const newIndex = links.findIndex((link) => link.id === over.id);
      const newOrder = arrayMove(links, prevIndex, newIndex);
      setLinks(newOrder);
      
      const disabledLinks : SocialNetwork[] = JSON.parse(data.links).filter((link: SocialNetwork) => !link.enabled )
      const newLinks = newOrder.concat(disabledLinks)
      console.log(newOrder)
      
      queryClient.setQueryData(["user"], (prevData: TUser) => {
        return { ...prevData, links: JSON.stringify(newLinks) };
      });
      
      console.log(links)
      console.log(prevIndex);
      console.log(newIndex);
    }
  };

  useEffect(() => {
    setLinks(
      JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled),
    );
    setSkills(JSON.parse(data.tags));
  }, [data]);
  return (
    <>
      <article className="p-5 my-2  bg-white aspect-square shadow rounded-2xl ">
        <section className=" w-fit rounded-full border-2 border-gray-400 mx-auto ">
          <img
            src={data.image}
            alt=""
            className="size-36 rounded-full mx-auto object-cover "
          />
        </section>
        <section className=" flex justify-center space-y-2 flex-col items-center my-2">
          <h2 className=" font-semibold text-gray-800 text-xl">{data.name}</h2>
          <span className="  text-blue-500  text-sm">@{data.handle}</span>
          <span className="  text-gray-500  text-sm flex">
            <IoLocationOutline className="size-4 text-green-400" />
            {data.location}
          </span>
          <span className="  text-gray-500 text-justify line text-sm">
            {data.description}
          </span>
        </section>
        <section className="flex justify-center py-2.5 my-2">
          <Link
          to={`/${data.handle}`}
          className=" bg-gray-900  flex items-center gap-1 px-5 border border-solid  text-white cursor-pointer hover:bg-gray-800  transition-all border-blue-200 p-2 rounded-xl "
          >
            <IoEyeOutline size={18} className=""/>
            <span className=" text-xs font-semibold">Ver mi perfil</span>
            
          </Link>
        </section>
            <Divider/>
        <section className="flex gap-2.5 flex-wrap my-2 ">
          {skills.map((item: TagSkill) => (
            <Chip
              label={`# ${item.skill}`}
              size="small"
              color="primary"
              variant="outlined"
              title={item.skill}
              key={item.skill}
            />
          ))}
        </section>

        <section className="flex flex-col space-y-2.5 my-2 border-y py-2 border-gray-300 ">
          <p className="text-xs font-bold text-gray-700">Información</p>
          <TagInformation
            Icon={MdOutlineRememberMe}
            Label="Miembro desde"
            color="bg-gray-100"
            value={date.getFullYear()}
          />
        </section>

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}>
          <SortableContext items={links} strategy={verticalListSortingStrategy}>
            <section className="flex flex-col space-y-2.5">
              <p className="text-xs font-bold text-gray-700">
                Enlaces disponibles
              </p>
              {links.map((link: SocialNetwork) => (
                <CardLink data={link} key={link.name} />
              ))}
            </section>
          </SortableContext>
        </DndContext>
      </article>
    </>
  );
};

export default ImageProfile;
