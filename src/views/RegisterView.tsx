import type { RegisterForm } from "../types";
import { Link } from "react-router-dom";
import { Mail, User, IdCard, Key } from "lucide-react";
import { useForm } from "react-hook-form";
import Input from "../components/ui/Input";
import axios, { isAxiosError } from "axios";
import { toast } from "sonner";

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
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const rules = {
    name: { required: "El nombre es obligatorio" },
    email: { required: "El email es obligatorio" },
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

    const url = `${import.meta.env.VITE_API_BACKEND_URL}/auth/register`
    try {
      const {data} = await axios.post(url,formData)
      toast.success(data)
      reset()
      
    } catch (error) {
      if(isAxiosError(error) && error.response){
        toast.error(error.response.data.error)
      }
    }
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
        className="bg-white px-10 lg:w-5/12  sm:w-10/12 mx-auto rounded-lg flex flex-col shadow-lg  py-10 border border-solid border-gray-200 ">
        <div className="grid grid-cols-1 space-y-3 ">
          <Input
            label="Nombre"
            name="name"
            Icon={User}
            register={register}
            errors={errors}
            rules={rules.name}
            Type="text"
            Placeholder={"Ingresa el nombre"}
          />
          <Input
            label="Email"
            name="email"
            Icon={Mail}
            register={register}
            errors={errors}
            rules={rules.email}
            Type="text"
            Placeholder={"Ingresa el email"}
          />
          <Input
            label="Handle / Nick"
            name="handle"
            Icon={IdCard}
            register={register}
            errors={errors}
            rules={rules.handle}
            Type="text"
            Placeholder={"Ingresa el nick"}
          />
          <Input
            label="Password"
            name="password"
            Icon={Key}
            register={register}
            errors={errors}
            rules={rules.password}
            Type="password"
            Placeholder={"Ingresa el password"}
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
          className="bg-gray-950 px-3 mt-5 py-2 uppercase text-white rounded-lg font-bold cursor-pointer"
          value="Crear Cuenta"
        />
        <span className="text-md mt-5 text-gray-700">
          ¿Ya tienes una cuenta?
          <Link
            className="text-blue-800 underline font-semibold ml-2 "
            to={"/auth/login"}>
            Iniciar Sesión
          </Link>
        </span>
      </form>
    </>
  );
}
