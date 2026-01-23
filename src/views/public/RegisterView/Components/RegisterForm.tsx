import type { RegisterForm } from "../../../../types";
import { Link } from "react-router-dom";
import { Mail, User, IdCard, Key } from "lucide-react";
import { useForm } from "react-hook-form";
import Divider from "../../../../components/ui/Divider";
import Input from "../../../../components/ui/Input";
import api from "../../../../config/axios";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export default function FormRegister() {
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
      
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-10 lg:w-4/12  sm:w-10/12 mx-auto rounded-4xl flex flex-col shadow-lg  py-5 border border-solid border-gray-100 ">
        <div className="grid grid-cols-1 space-y-3 ">
          <Input
            label="Nombre"
            name="name"
            Icon={User}
            register={register}
            errors={errors}
            rules={rules.name}
            Type="text"
            Placeholder={"Ingresa tu nombre"}
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
          />
        </div>
        <input
          type="submit"
          className="bg-blue-600 px-3  my-5 py-2  text-white rounded-lg font-medium cursor-pointer"
          value="Crear Cuenta"
        />
        <Divider />
        <span className="text-center py-3 text-gray-600 ">
          ¿Ya tienes una cuenta?
          <Link
            className="text-blue-600  font-semibold ml-2 "
            to={"/auth/login"}>
            Inicia Sesión
          </Link>
        </span>
      </form>
    </>
  );
}
