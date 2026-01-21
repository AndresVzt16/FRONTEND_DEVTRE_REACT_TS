import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import { IdCard, InfoIcon } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import type { TUser, ProfileForm } from "../../types";
export default function ProfileView() {
  const queryClient = useQueryClient();
  const data: TUser = queryClient.getQueryData(["user"])!;


  const defaultValues = {
    handle: data.handle,
    description: data.description,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleUserProfileFormSubmit = (formData: ProfileForm) => {
    console.log(formData);
  };


  const rules = {
    handle: { required: "El nombre de usuario es obligatorio" },
  };

  return (
    <form
      className="bg-white p-10 rounded-lg space-y-5"
      onSubmit={handleSubmit(handleUserProfileFormSubmit)}>
      <legend className="text-2xl text-slate-800 text-center">
        Editar Información
      </legend>
      <div className="grid grid-cols-1 gap-2">
        <Input
          Type="text"
          label="Handle/nick"
          name="handle"
          rules={rules.handle}
          errors={errors}
          register={register}
          Icon={IdCard}
        />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <TextArea
          Type="text"
          errors={errors}
          label="Descripcion"
          name="description"
          register={register}
          Icon={InfoIcon}
        />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="handle">Imagen:</label>
        <input
          id="image"
          type="file"
          name="handle"
          className="border-none bg-slate-100 rounded-lg p-2"
          accept="image/*"
          onChange={() => {}}
        />
      </div>

      <input
        type="submit"
        className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
        value="Guardar Cambios"
      />
    </form>
  );
}
