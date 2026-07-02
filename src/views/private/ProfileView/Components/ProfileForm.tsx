import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Input from "../../../../components/ui/Input";
import TextArea from "../../../../components/ui/TextArea";
import Button from "../../../../components/ui/Button";
import { useQueryClient } from "@tanstack/react-query";
import { IdCard, InfoIcon, User } from "lucide-react";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import type { ProfileForm, TUser } from "../../../../types";
import InputFileUpload from "../../../../components/ui/InputFileUpload";
import ButtonUI from "../../../../components/ui/Button";

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
  const [previewImage, setPreviewImage] = useState("");
  const defaultValues = {
    handle: data.handle,
    description: data.description,
    name: data.name,
    image: data.image,
    tags: data.tags,
    location: data.location,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const rules = {
    handle: { required: "El nick de usuario es obligatorio" },
    name: { required: "El nombre de usuario es obligatorio" },
    location: { required: "La locación es obligatoria" },
    description: { required: "La descripcion es obligatoria." },
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const image = e.target.files[0];
      setSelectedImage(image);
      const previewImageUrl = URL.createObjectURL(image);
      setPreviewImage(previewImageUrl);
    }
  };

  const handleUploadProfile = async (data: ProfileForm) => {
    // 1️⃣ Si hay imagen nueva, súbela primero
    if (selectedImage) {
      uploadImage(selectedImage);
    }

    // 2️⃣ Luego actualiza el perfil
    updateProfile(data);
  };
  useEffect(() => {
    return () => {
      if (previewImage) URL.revokeObjectURL(previewImage);
    };
  }, [previewImage]);
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
      <div className=" gap-2   bg-white p-5 my-5 rounded-2xl shadow">
        <p className=" text-xs  font-semibold text-gray-700 mb-2.5">Foto de perfil</p>
        <section className="flex  gap-5">
          {(previewImage || data.image) && (
            <img
              src={previewImage || data.image}
              alt="Preview"
              className="size-32 object-cover rounded-xl"
            />
          )}
          <section className="space-y-2.5  flex flex-col  flex-1">
            <section className="flex gap-5">
              <InputFileUpload onChange={handleChangeImage} />
              <ButtonUI text="Eliminar imagen" color="text-red-500" variant="outlined"   Icon={MdOutlineDelete} />
            </section>
            <article className="bg-gray-50 rounded p-5 flex flex-wrap text-gray-700  ">
              <p className="text-sm w-full font-bold mb-1.5">Recomendaciones</p>
              <span className="text-xs ">
                JPG, JPEG, PNG, Máximo 5MB • Ideal 400x400px
              </span>
            </article>
          </section>
        </section>
      </div>
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
        <Input
          Type="text"
          label="Locación"
          name="location"
          rules={rules.name}
          errors={errors}
          register={register}
          Icon={CiLocationArrow1}
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
