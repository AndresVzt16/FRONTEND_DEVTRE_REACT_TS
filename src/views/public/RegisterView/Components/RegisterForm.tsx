import type { RegisterForm } from "../../../../types";
import { Link, useLocation } from "react-router-dom";
import { Mail, User, IdCard, Key } from "lucide-react";
import { useForm } from "react-hook-form";
import Divider from "../../../../components/ui/Divider";
import Input from "../../../../components/ui/Input";
import api from "../../../../config/axios";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import ButtonUI from "../../../../components/ui/Button";

export default function FormRegister() {

  const location = useLocation()
  
  const initialValues: RegisterForm = {
    name: "",
    email: "",
    handle: location.state?.handle || '',
    password: "",
    password_confirmation: "",
  };
  const {
    handleSubmit,
    watch,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const rules = {
    name: { required: "El nombre es obligatorio" },
    email: {
      required: "El email es obligatorio",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "E-mail no válido",
      },
    },
    handle: { required: "El handle es obligatorio" },
    password: {
      required: "El password es obligatorio",
      minLength: {
        value: 8,
        message: "La contraseña debe contener minimo 8 caracteres.",
      },
    },
    password_confirmation: {
      required: "La confirmación de password es obligatoria",
      validate: (value: string) =>
        password === value || "Los passwords no son iguales.",
    },
  };

  const handleRegister = async (formData: RegisterForm) => {
    const url = `/auth/register`;
    try {
      const { data } = await api.post(url, formData);
      toast.success(data.message);
      reset();
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      }
    }
  };
  const password = watch("password");

  return (
    <>
      <section className=" bg-white py-5 lg:w-4/12 overflow-hidden sm:w-10/12 mx-auto rounded-xl flex flex-col shadow-lg  border border-solid border-gray-100 ">
        <img src="/logo.svg" alt="" className="size-12 mx-auto" />
        <h2 className=" text-center text-gray-900 text-xl font-semibold">
          Crea tu cuenta
        </h2>
        <span className=" text-center text-xs text-gray-500 my-2 block ">
          Comienza a compartir tu perfil de desarrollador hoy
        </span>

        <form onSubmit={handleSubmit(handleRegister)} className=" ">
          <div className="grid grid-cols-1 space-y-5 mb-5 px-10 ">
            <Input
              label="Nombre"
              name="name"
              Icon={User}
              register={register}
              errors={errors}
              rules={rules.name}
              Type="text"
              Placeholder={"Ingresa tu nombre"}
              Size="small"
            />
            <Input
              label="Email"
              name="email"
              Icon={Mail}
              register={register}
              errors={errors}
              rules={rules.email}
              Type="text"
              Placeholder={"Ingresa tu email"}
              Size="small"
            />
            <Input
              label="Handle / Nick"
              name="handle"
              Icon={IdCard}
              register={register}
              errors={errors}
              rules={rules.handle}
              Type="text"
              Placeholder={"Ingresa tu nick"}
              Size="small"
            />
            <Input
              label="Password"
              name="password"
              Icon={Key}
              register={register}
              errors={errors}
              rules={rules.password}
              Type="password"
              Placeholder={"Ingresa tu password"}
              Size="small"
            />
            <Input
              label="Repetir password"
              name="password_confirmation"
              Icon={Key}
              register={register}
              errors={errors}
              rules={rules.password_confirmation}
              Type="password"
              Placeholder="Repite el password anterior"
              Size="small"
            />
            <ButtonUI type="submit" text="Crear cuenta" />
          </div>
         <Divider/>
          <section className=" w-full pt-3">
            <p className="text-center text-sm text-gray-950  w-full">
              ¿Ya tienes una cuenta?
              <Link
                className="text-blue-700  font-semibold ml-2 "
                to={"/login"}>
                Inicia Sesión
              </Link>
            </p>
          </section>
        </form>
      </section>
    </>
  );
}
