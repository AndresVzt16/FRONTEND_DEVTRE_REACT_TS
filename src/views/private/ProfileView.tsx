import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import { IdCard } from "lucide-react";
export default function ProfileView() {
  const initialValues = {
    handle: "",
    description: "",
    image: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: {} });
  const rules = {
    handle: { required: "El nombre de usuario es obligatorio" },
  };

  return (
    <form className="bg-white p-10 rounded-lg space-y-5" onSubmit={() => {}}>
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
        <label htmlFor="description">Descripción:</label>
        <textarea
          className="border-none bg-slate-100 rounded-lg p-2"
          placeholder="Tu Descripción"
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
