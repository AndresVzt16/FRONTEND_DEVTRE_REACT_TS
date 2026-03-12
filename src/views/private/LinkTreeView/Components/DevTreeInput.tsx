import React, { useEffect } from "react";
import SwitchUI from "../../../../components/ui/Switch";
import IconButton from "@mui/material/IconButton";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateProfile } from "../../../../hooks/useUpdateProfile";
import type { DevtreeLink, SocialNetwork, TUser } from "../../../../types";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import {
  FiGithub,
  FiInstagram,
  FiTwitch,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import Input from "../../../../components/ui/Input";
import { useForm } from "react-hook-form";
import { isValidUrl } from "../../../../utils";
import { toast } from "sonner";
type DevtreInputProps = {
  item: DevtreeLink;
  setDevTreeLinks: (data: DevtreeLink[]) => void;
  DevtreeLinks: DevtreeLink[];
};

const DevTreeInput = ({
  item,
  setDevTreeLinks,
  DevtreeLinks,
}: DevtreInputProps) => {
  const queryClient = useQueryClient();
  const user: TUser = queryClient.getQueryData(["user"])!;
  const mutation = useUpdateProfile();

  const {
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [item.name]: item.url ?? "",
    },
  });

  const key = item.name.toLowerCase().trim();

  const icons: Record<string, IconType | undefined> = {
    facebook: FiFacebook,
    tiktok: FaTiktok,
    x: FaXTwitter,
    instagram: FiInstagram,
    github: FiGithub,
    youtube: FiYoutube,
    twitch: FiTwitch,
    linkedin: FiLinkedin,
  };

  const rules = {
    socialGenericRule: { required: "este campo no puede estar Vacio" },
  };

  const IconComponent = icons[key];

  const handleChangeUrl = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const updateLinks = DevtreeLinks.map((link) =>
      link.name === e.target.name
        ? { ...link, url: e.target.value, enabled: false }
        : link,
    );
    
    setDevTreeLinks(updateLinks);
  };

  const handleEnableLink = (socialNetwork: string) => {
    console.log(socialNetwork);
    const updateStatusLinks = DevtreeLinks.map((link) => {
      if (link.name === socialNetwork) {
        if (isValidUrl(link.url)) {
          return { ...link, enabled: !link.enabled };
        } else {
          toast.error(
            "La URL que intentaste activar no es valida, por favor verifícala e intenta de nuevo.",
          );
        }
      }
      return link;
    });
    setDevTreeLinks(updateStatusLinks);

    console.log(updateStatusLinks);
    queryClient.setQueryData(["user"], (prevData: TUser) => {
      return {
        ...prevData,
        links: JSON.stringify(updateStatusLinks),
      };
    });
  };

  const handleDeleteLink = (link: SocialNetwork) => {
    const updatedLinks = DevtreeLinks.map((item) => {
      if (item.name === link.name) {
        return { ...item, url: "", enabled: false };
      }
      return item;
    });
    setDevTreeLinks(updatedLinks);
    queryClient.setQueryData(["user"], (prevData: TUser) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedLinks),
      };
    });
  };

  useEffect(() => {
    reset({ [item.name]: item.url ?? "" });
  }, [item.url, item.name, reset]);

  return (
    <div className=" bg-white shadow flex justify-evenly items-center w-full  border rounded-2xl border-gray-200  p-5 gap-5 ">
      <section>
        <div className=" bg-neutral-900 p-2  rounded-lg flex items-center justify-center  ">
          {IconComponent && <IconComponent className="size-5 text-gray-100" />}
        </div>
      </section>
      <div className=" md:w-full font-family-sans  flex flex-wrap ">
        <Input
          label={item.name}
          errors={errors}
          Type="text"
          name={item.name}
          register={register}
          rules={rules.socialGenericRule}
          Icon={icons[key]}
          OnChange={handleChangeUrl}
          Size="small"
        />
      </div>
      <div className="flex items-center ">
        <SwitchUI enabled={item.enabled} fn={handleEnableLink} item={item} />
      </div>
      <div className=" flex items-center ">
        <IconButton
          sx={{ p: "12px" }}
          color="error"
          onClick={() => handleDeleteLink(item as SocialNetwork)}>
          <AiOutlineDelete className=" size-5" />
        </IconButton>
      </div>
    </div>
  );
};

export default DevTreeInput;
