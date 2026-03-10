import type { TagSkill } from "../../../../types";
import * as SiIcons from "react-icons/si";
import ButtonUI from "../../../../components/ui/Button";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import Input from "../../../../components/ui/Input";
import IconButtonUI from "../../../../components/ui/IconButtonUI";

type TagsProps = {
  tagsList: [TagSkill];
};
const TagsForm = ({ tagsList }: TagsProps) => {
  const iconsList = {
    SiIcons,
  };
  const defaultValues = {
    name: "",
    icon: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const rules = {};
  return (
    <>
      <div className=" rounded-xl mb-5">
        <p className=" text-sm font-semibold py-2 px-1   w-full text-neutral-900">
          Tags/Skills
        </p>

        <div className="flex gap-5 items-center">
          <div className="flex-1">
            <Input
              Type="text"
              errors={errors}
              register={register}
              name="nombre"
              label="Nombre"
            />
          </div>

          <ButtonUI text="Agregar" Icon={PlusIcon} />
        </div>
        <div className=" p-5 rounded-2xl border-gray-300 flex justify-center min-h-6">
          {tagsList.length > 0 ? (
            <section className=" grid grid-cols-3"></section>
          ) : (
            <section className="block">
              <p className="text-gray-600 text-sm ">
                -- No tienes tags creados --
              </p>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default TagsForm;
