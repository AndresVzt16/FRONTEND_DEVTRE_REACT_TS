import { use, useEffect, useState } from "react";
import IconButtonUI from "../../../../components/ui/IconButtonUI";
import { useForm } from "react-hook-form";
import Collapse from "@mui/material/Collapse";
import { SiGotomeeting } from "react-icons/si";
import { useQueryClient } from "@tanstack/react-query";
import Input from "../../../../components/ui/Input";
import { useUpdateProfile } from "../../../../hooks/useUpdateProfile";
import type { TagSkill, TUser } from "../../../../types";
import { toast } from "sonner";
import { FiSend } from "react-icons/fi";
interface TagsFormProps {
  status: boolean;
  uploadProfile: () => void;
  tags: TagSkill[];
  setTags: (data: TagSkill[]) => void;
}

const TagsForm = ({ status, uploadProfile, tags, setTags }: TagsFormProps) => {
  const updateProfile = useUpdateProfile();
  const queryClient = useQueryClient();

  const [isOpenForm, setIsOpenForm] = useState(status);
  const defaultValues: TagSkill = {
    skill: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TagSkill>({ defaultValues });

  const handleUploadTags = async (data: TagSkill) => {
    const isExist = tags.some(
      (tag: TagSkill) =>
        tag.skill.toLocaleLowerCase() === data.skill.toLocaleLowerCase(),
    );

    if (isExist) {
      toast.error("El tag que estas intentando agregar ya existe.");
      return;
    }
    const updatedTags = [...tags, data];
    setTags(updatedTags);
    queryClient.setQueryData(["user"], (prevData: TUser) => {
      return { ...prevData, tags: JSON.stringify(updatedTags) };
    });
    const user: TUser = queryClient.getQueryData(["user"])!;
    updateProfile.mutate(user);

    reset();
  };

  const rules = {
    tag: { required: "El tag no puede estar vacio" },
  };
  useEffect(() => {
    setIsOpenForm(status);
  }, [status]);
  return (
    <>
      <Collapse in={isOpenForm} timeout="auto" unmountOnExit>
        <form onSubmit={handleSubmit(handleUploadTags)} className="my-2">
          <div className=" flex gap-2.5 items-center ">
            <Input
              Type="text"
              Icon={SiGotomeeting}
              Size="small"
              errors={errors}
              name="skill"
              register={register}
            />

            <div className=" flex  items-center h-full ">
              <IconButtonUI
                Color="info"
                type="submit"
                size="small"
                Icon={FiSend}
              />
            </div>
          </div>
        </form>
      </Collapse>
    </>
  );
};

export default TagsForm;
