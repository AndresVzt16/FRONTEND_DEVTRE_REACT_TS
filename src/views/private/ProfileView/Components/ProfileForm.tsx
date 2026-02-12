import type React from "react";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Input from "../../../../components/ui/Input";
import TextArea from "../../../../components/ui/TextArea";
import Button from "../../../../components/ui/Button";
import { useQueryClient } from "@tanstack/react-query";
import { IdCard, InfoIcon, UploadCloud, User, X } from "lucide-react";
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
  const fileRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const data: TUser = queryClient.getQueryData(["user"])!;

  const [previewImage, setPreviewImage] = useState<string | null>(
    data.image ?? null,
  );

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const defaultValues = {
    handle: data.handle,
    description: data.description,
    name: data.name,
    image: data.image,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
    setSelectedImage(file); // 👈 solo guardamos, NO subimos
  };

  const handleUploadProfile = async (data: ProfileForm) => {
    // 1️⃣ Si hay imagen nueva, súbela primero
    if (selectedImage) {
      uploadImage(selectedImage);
    }

    // 2️⃣ Luego actualiza el perfil
    updateProfile(data);
  };

  const handleCancelImage = () => {
    setPreviewImage(data.image ?? null);
    setSelectedImage(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleReference = () => {
    fileRef.current?.click();
  };
  return (
    <form
      className="bg-white px-10 py-5  border-gray-200  w-full  mx-auto border"
      onSubmit={handleSubmit(handleUploadProfile)}>
      <h1 className="text-xl text-gray-950 my-2  font-semibold">
        Editar Información
      </h1>
      <span className="text-gray-600 text-sm mb-5 block">
        Actualiza tu información de perfil y cómo otros te ven
      </span>
      {/* <section className=" flex gap-5 items-center">
        <img
        src="/logo.svg"
        className="size-22 rounded-2xl bg-gray-50 border border-gray-200"
        alt=""
        />
        <Input
        Type="text"
        label="Url de imagen"
        name="image"
        rules={rules.handle}
        errors={errors}
        register={register}
        Icon={Image}
        />
        </section> */}
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="handle">Foto de Perfil:</label>
        <section className=" flex gap-5">
          {previewImage && (
            <img
              src={previewImage}
              className="size-28 rounded-2xl object-cover"
              alt="Foto de perfil"
            />
          )}

          <div className="flex h-fit gap-5 ">
            <Button
              text="Subir nueva imagen"
              Icon={UploadCloud}
              fn={handleReference}
              priority="primary"
              type="button"
            />
            <Button
              text="Eliminar"
              Icon={X}
              fn={handleCancelImage}
              priority="secondary"
            />

            {/* <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="bg-cyan-500 flex gap-2 text-white px-5 py-3 items-center rounded-xl">
              <UploadCloud className=" size-5"/>Subir nueva foto
            </button> */}

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </section>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* <Input
          Type="text"
          label="Nombre"
          name="handle"
          rules={rules.handle}
          errors={errors}
          register={register}
          Icon={User}
        /> */}
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

      <div className="grid grid-cols-1 gap-2">
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
