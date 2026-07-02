import { useEffect, useState } from "react";
import type { TagSkill, TUser } from "../../../../types";
import { Calendar, Image } from "lucide-react";
import TagInformation from "./TagInformation";
import { AiOutlineUser } from "react-icons/ai";
import Divider from "@mui/material/Divider";
import IconButtonUI from "../../../../components/ui/IconButtonUI";
import { useUpdateProfile } from "../../../../hooks/useUpdateProfile";
import Chip from "@mui/material/Chip";
import TagsForm from "./TagsForm";
import { GoPlus } from "react-icons/go";
import { useQueryClient } from "@tanstack/react-query";

interface propsProfile {
  data: TUser;
}

const ProfileLinks = ({ data }: propsProfile) => {
  const updateProfile = useUpdateProfile();
  const queryClient = useQueryClient();
  const user: TUser = queryClient.getQueryData(["user"])!;
  const [tags, setTags] = useState(JSON.parse(data.tags));

  const [date, setDate] = useState(new Date(data.createdAt));
  const [modificationDate, setModificationDate] = useState(
    new Date(data.updatedAt),
  );

  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleUpdateTags = () => {};

  const handleOpenFormTag = () => {
    setIsOpenForm(!isOpenForm);
  };

  const handleDelete = (tag: TagSkill) => {
    console.log(tags);
    console.log(tag);
    const updatedTagsUser = tags.filter(
      (item: TagSkill) => item.skill !== tag.skill,
    );
    setTags(updatedTagsUser);
    queryClient.setQueryData(["user"], (prevData: TUser) => {
      return {
        ...prevData,
        tags: JSON.stringify(updatedTagsUser),
      };
    });
    const user: TUser = queryClient.getQueryData(["user"])!;
    updateProfile.mutate(user);
  };

  useEffect(() => {
    setTags(JSON.parse(data.tags));
  }, [data]);
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

          <h2 className=" text-sm font-semibold text-neutral-700 my-5">
            Datos Informativos
          </h2>
        <section className="flex flex-wrap  gap-2.5 mb-5  ">
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

        <section className=" gap-2.5 my-5 p-3 rounded-2xl" >
          <div className=" flex justify-between flex-wrap">
            <h2 className=" text-sm font-semibold text-neutral-800">Tags</h2>
            <div className="flex gap-2.5  ">
              <IconButtonUI
                Color="info"
                size="small"
                Icon={GoPlus}
                onClick={handleOpenFormTag}
              />
            </div>
          </div>
          <TagsForm
            tags={tags}
            setTags={setTags}
            uploadProfile={handleUpdateTags}
            status={isOpenForm}
          />
          <div className="  flex flex-col space-y-2.5">
          <p className=" text-sm text-gray-800 font-semibold">Mis tags</p>
          <div className=" flex gap-2 flex-wrap   ">
            {tags.map((tag: TagSkill) => (
              <Chip
                label={`#${tag.skill}`}
                variant="outlined"
                className="animate-fade-down animate-duration-300 shadow"
                key={tag.skill}
                size="small"
                
                onDelete={() => handleDelete(tag)}
                color="secondary"
                

              />
            ))}
         
          </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ProfileLinks;
