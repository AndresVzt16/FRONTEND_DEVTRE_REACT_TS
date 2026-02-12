import React, { useEffect } from "react";
import SwitchUI from "../../../../components/ui/Switch";
import { useQueryClient } from "@tanstack/react-query";
import type { DevtreeLink, TUser } from "../../../../types";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import Input from "../../../../components/ui/Input";
import { useForm } from "react-hook-form";
import type { LucideIcon } from "lucide-react";
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

  const defaultValues = {
    [item.name]: item.url ?? "",
  };

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

  const icons: Record<string, LucideIcon | undefined> = {
    facebook: Facebook,
    tiktok: undefined,
    x: Twitter,
    instagram: Instagram,
    github: Github,
    youtube: Youtube,
    twitch: Twitch,
    linkedin: Linkedin,
  };

  const rules = {
    socialGenericRule: { required: "este campo no puede estar Vacio" },
  };

  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateLinks = DevtreeLinks.map((link) =>
      link.name === e.target.name
        ? { ...link, url: e.target.value, enabled: false }
        : link,
    );
    console.log(updateLinks);
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
  useEffect(() => {
    reset({ [item.name]: item.url ?? "" });
  }, [item.url, item.name, reset]);

  return (
    <div className="md:flex items-end md:mx-auto gap-5">
      <p className="text-gray-400">{item.enabled}</p>

      <div
        className="bg-cover size-12 md:mb-5 "
        style={{ backgroundImage: `url(/social/icon_${item.name}.svg)` }}></div>
      <div className=" md:w-7/12">
        <Input
          label={item.name}
          errors={errors}
          Type="text"
          name={item.name}
          register={register}
          rules={rules.socialGenericRule}
          Icon={icons[key]}
          OnChange={handleChangeUrl}
        />
      </div>
      <div className=" mb-6">
        <SwitchUI enabled={item.enabled} fn={handleEnableLink} item={item} />
      </div>
    </div>
  );
};

export default DevTreeInput;
