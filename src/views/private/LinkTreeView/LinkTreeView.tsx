import { useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import { social } from "../../../data/social";
import DevTreeInput from "./Components/DevTreeInput";
import { Save } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../../services/Services";
import { toast } from "sonner";
import type { SocialNetwork, TUser } from "../../../types";

const LinkTreeView = () => {
  const [devTreeLinks, setDevTreeLinks] = useState(social);
  const queryClient = useQueryClient();
  const user: TUser = queryClient.getQueryData(["user"])!;

  const { mutate, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      toast.success(data.message);
      /* invalidar los datos cacheados para ejecutar la nueva consulta con reactividad */
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  useEffect(() => {
    const updatedData = devTreeLinks.map((item) => {
      const userLink = JSON.parse(user.links).find(
        (link:SocialNetwork) => link.name === item.name,
      );
      if (userLink) {
        return { ...item, url: userLink.url, enabled: userLink.enabled };
      }
      return item;
    });
    console.log(updatedData);
    setDevTreeLinks(updatedData);
    console.log(devTreeLinks);
    console.log(JSON.parse(user.links));
  }, []);
  const hanldeUpdateProfile = () => {
    mutate(user);
  };
  return (
    <div className="px-10 bg-white border border-gray-200 mx-auto">
      {devTreeLinks.map((item) => (
        <DevTreeInput
          item={item}
          key={item.name}
          setDevTreeLinks={setDevTreeLinks}
          DevtreeLinks={devTreeLinks}
        />
      ))}
      <Button
        text="Guardar cambios"
        Icon={Save}
        fn={hanldeUpdateProfile}
        loading={isPending}
      />
    </div>
  );
};

export default LinkTreeView;
