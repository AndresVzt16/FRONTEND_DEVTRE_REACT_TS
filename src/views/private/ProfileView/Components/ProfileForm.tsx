import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Input from "../../../../components/ui/Input";
import TextArea from "../../../../components/ui/TextArea";
import Button from "../../../../components/ui/Button";
import { useQueryClient } from "@tanstack/react-query";
import { IdCard, InfoIcon, User } from "lucide-react";
import type { ProfileForm, TUser } from "../../../../types";

interface profileProps {
  updateProfile: (data: ProfileForm) => void;
  uploadImage: (file: File) => void;
  loading: boolean;
}

export default function ProfileForms({
  updateProfile,
  loading,
  uploadImage,
}: profileProps) {
  const queryClient = useQueryClient();
  const data: TUser = queryClient.getQueryData(["user"])!;

  const [selectedImage, setSelectedImage] = useState<File | null>(null);


  const defaultValues = {
    handle: data.handle,
    description: data.description,
    name: data.name,
    image: data.image,
    tags: data.tags,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const rules = {
    handle: { required: "El nick de usuario es obligatorio" },
    name: { required: "El nombre de usuario es obligatorio" },
    description: { required: "La descripcion es obligatoria." },
  };


  const handleUploadProfile = async (data: ProfileForm) => {
    // 1️⃣ Si hay imagen nueva, súbela primero
    if (selectedImage) {
      uploadImage(selectedImage);
    }

    // 2️⃣ Luego actualiza el perfil
    updateProfile(data);
  };


  return (
    <form
      className=" py-5  border-gray-200  w-full  mx-auto "
      onSubmit={handleSubmit(handleUploadProfile)}>
      <h1 className="text-xl text-gray-950  font-semibold">
        Editar Información
      </h1>
      <span className="text-gray-600 text-sm my-2.5 block">
        Actualiza tu información de perfil y cómo otros te ven
      </span>

      <h2 className=" text-sm font-semibold">Datos Informativos</h2>
      <div className="lg:grid grid-cols-2 gap-5 bg-white p-5 rounded-2xl shadow my-2.5">

        <Input
          Type="text"
          label="Handle/nick"
          name="handle"
          rules={rules.handle}
          errors={errors}
          register={register}
          Icon={IdCard}
        />
        <Input
          Type="text"
          label="Nombre"
          name="name"
          rules={rules.name}
          errors={errors}
          register={register}
          Icon={User}
        />
      </div>

      <div className="grid grid-cols-1 gap-2 bg-white p-5 my-5 rounded-2xl shadow">
        <TextArea
          Type="text"
          errors={errors}
          label="Descripcion"
          name="description"
          rules={rules.description}
          register={register}
          Icon={InfoIcon}
        />
      </div>

  
      <Button text="Guardar cambios" loading={loading} type="submit" />
    </form>
  );
}
