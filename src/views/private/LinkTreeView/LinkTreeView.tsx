import { useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import { social } from "../../../data/social";
import DevTreeInput from "./Components/DevTreeInput";
import { Save } from "lucide-react";
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";
import { useQueryClient } from "@tanstack/react-query";
import type { SocialNetwork, TUser } from "../../../types";

const LinkTreeView = () => {
  const mutation = useUpdateProfile()
  const [devTreeLinks, setDevTreeLinks] = useState(social);
  const queryClient = useQueryClient();
  const user: TUser = queryClient.getQueryData(["user"])!;


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
    
    setDevTreeLinks(updatedData);
  }, []);
  const hanldeUpdateProfile = () => {
    mutation.mutate(user)
  };

  
  return (
    <div className=" flex flex-col  gap-5 py-5  border-gray-200 mx-auto">
      {devTreeLinks.map((item) => (
        <DevTreeInput
          item={item}
          key={item.name}
          setDevTreeLinks={setDevTreeLinks}
          DevtreeLinks={devTreeLinks}
        />
      ))}
      <div className="flex justify-end">

      <Button
        variant="contained"
        text="Guardar cambios"
        Icon={Save}
        fn={hanldeUpdateProfile}
        loading={mutation.isPending}
      />
      </div>
    </div>
  );
};

export default LinkTreeView;
