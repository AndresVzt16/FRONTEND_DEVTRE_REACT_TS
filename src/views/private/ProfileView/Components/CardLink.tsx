import { useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import type { SocialNetwork } from "../../../../types";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitch,
  FiYoutube,
} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const icons: Record<string, { Icon: IconType; color: string }> = {
  facebook: { Icon: FiFacebook, color: "#1877F2" },
  tiktok: { Icon: FaTiktok, color: "#000000" },
  x: { Icon: FaXTwitter, color: "#000000" },
  instagram: { Icon: FiInstagram, color: "#E4405F" },
  github: { Icon: FiGithub, color: "#181717" },
  youtube: { Icon: FiYoutube, color: "#FF0000" },
  twitch: { Icon: FiTwitch, color: "#9146FF" },
  linkedin: { Icon: FiLinkedin, color: "#0A66C2" },
};

type CardLinkProps = {
  data: SocialNetwork;
};
const CardLink = ({ data }: CardLinkProps) => {
  const [UIdataLink, setUIDataLink] = useState(icons[data.name] ?? null);
  const Icon = UIdataLink.Icon;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: data.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <article
      ref={setNodeRef}
      className="py-2 px-2 shadow-md  border rounded-xl bg-white cursor-pointer  border-gray-200 flex items-center gap-2"
      style={style}
      {...attributes}
      {...listeners}>
      <div
        style={{ backgroundColor: UIdataLink.color }}
        className=" w-8 h-8 flex items-center justify-center shadow-md  text-white rounded-xl">
        {Icon && <Icon className="size-4" />}
      </div>
      <h1 className=" text-sm">
        Visitame en{" "}
        <a href={`${data.url}`} className="font-bold text-gray-900 capitalize">
          {data.name}
        </a>
      </h1>
    </article>
  );
};

export default CardLink;
