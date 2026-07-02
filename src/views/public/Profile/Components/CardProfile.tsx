import { useEffect, useState } from "react";
import type { SocialNetwork, TagSkill, UserHandle } from "../../../../types";
import CardLink from "../../../private/ProfileView/Components/CardLink";
import { IoLocationOutline } from "react-icons/io5";
import Chip from "@mui/material/Chip";
import TagInformation from "../../../private/ProfileView/Components/TagInformation";
import { CiHashtag } from "react-icons/ci";
type DataProps = {
  data: UserHandle;
};

const CardProfile = ({ data }: DataProps) => {
  const [links, setLinks] = useState(JSON.parse(data.links));
  const [tags, setTags] = useState(JSON.parse(data.tags));
  console.log(links);
  useEffect(() => {
    setLinks(
      JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled),
    );
    setTags(JSON.parse(data.tags));
  }, [data]);
  return (
    <div className="  overflow-hidden rounded-xl md:w-1/2  border border-gray-300 shadow">
      <div className=" animate-add h-48 bg-linear-to-br from-[oklch(0.35_0.15_264)] to-[oklch(0.35_0.18_310)] relative"
      
      >
        <div className="absolute -bottom-1/3 left-10 mx-auto animate-jump-in">
          <article className="w-32 h-32 rounded-full border-4  overflow-hidden shadow-xl ">
            <img
              src={`${data.image}`}
              className="w-full h-full object-cover"
              alt=""
            />
          </article>
        </div>
        <div className=" flex justify-end px-10 py-10">
          <Chip label={data.location} color="success"  icon={<IoLocationOutline/>} size="small"/>
        </div>
      </div>
      <section className="px-10 pb-10">
        <div className="  pt-20">
          <p className=" text-gray-950 text-2xl font-semibold">{data.name}</p>
          <p className=" text-gray-800">{data.description}</p>
        </div>
        <div className=" mt-5 flex gap-2 animate-fade-up ">
          {tags.map((tag: TagSkill) => (
            <TagInformation value={tag.skill} Icon={CiHashtag} color=""/>
          ))}
        </div>
        <div className=" mt-5 space-y-2.5">
          {links.map((link: SocialNetwork) => (
            <CardLink data={link} key={link.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardProfile;
