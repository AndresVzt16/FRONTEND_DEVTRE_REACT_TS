import type { RegisterForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import { Mail, Lock, ArrowRight, User, IdCard, Key } from "lucide-react";
import { useForm } from "react-hook-form";
import Input from "../components/ui/Input";

export default function RegisterView() {
  const initialValues: RegisterForm = {
    name: "",
    email: "",
    handle: "",
    password: "",
    password_confirmation: "",
  };
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const rules = {
    name: { ...register("name", { required: "El nombre es obligatorio" }) },
    email: { ...register("email", { required: "El email es obligatorio" , }) },
    handle: { ...register("handle", { required: "El handle es obligatorio" }) },
    password: {
      ...register("password", { required: "El password es obligatorio", minLength:{value:8, message:'La contraseña debe contener minimo 8 caracteres.'} }),
    },
    password_confirmation: {
      ...register("password_confirmation", {
        required: "La confirmación de password es obligatoria",
        validate: (value) =>
          password === value || "Los passwords no son iguales.",
      }),
    },
  };
  const handleRegister = (formData: RegisterForm) => {
    console.log(formData);
  };

  const password = watch("password");

  return (
    <>
      <section className="text-center ">
        <h2 className=" text-center text-gray-950 text-2xl font-semibold">
          Crea tu cuenta
        </h2>
        <span className=" text-center text-gray-500 ">
          Comienza a compartir tu perfil de desarrollador hoy
        </span>
      </section>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5  w-5/12 mx-auto rounded-lg  py-5 ">
        <div className="grid grid-cols-1 space-y-3 ">
          <Input
            label="Nombre"
            name="name"
            Icon={User}
            register={register}
            errors={errors}
            rules={rules.name}
          />
          <Input
            label="Email"
            name="email"
            Icon={Mail}
            register={register}
            errors={errors}
            rules={rules.email}
          />
          <Input
            label="Handle"
            name="handle"
            Icon={IdCard}
            register={register}
            errors={errors}
            rules={rules.handle}
          />
          <Input
            label="Password"
            name="password"
            Icon={Key}
            register={register}
            errors={errors}
            rules={rules.password}
          />
          <Input
            label="Repetir password"
            name="password_confirmation"
            Icon={Key}
            register={register}
            errors={errors}
            rules={rules.password_confirmation}
          />
        </div>
        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Crear Cuenta"
        />
      </form>
    </>
  );
}
