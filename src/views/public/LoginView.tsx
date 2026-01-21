import { Link, useNavigate } from "react-router-dom";
import Divider from "../../components/ui/Divider";
import { useForm } from "react-hook-form";
import { Mail, User, IdCard, Key } from "lucide-react";
import Input from "../../components/ui/Input";
import { isAxiosError } from "axios";
import type { LoginForm } from "../../types";
import api from "../../config/axios";
import { toast } from "sonner";
export default function LoginView() {
  const initialValues: LoginForm = {
    email: "",
    password: "",
  };

/*   localStorage.removeItem('AUTH_TOKEN') */
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const rules = {
    email: { required: "El email es obligatorio." ,pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                },},
    password: { required: "El password es obligatorio." },
  };
  const navigate = useNavigate()
  const handleLogin = async (formData: LoginForm) => {
    try {
      const {data} = await api.post("/auth/login", formData);
      /* console.log(response); */
      
      localStorage.setItem('AUTH_TOKEN',data)
      navigate('/admin')

    } catch (error) {
      if (isAxiosError(error) && error.response) {
        console.log(error.response)
        toast.error(error.response.data.error);
      }
    }
  };
  return (
    <>
      <section className="text-center my-10 ">
        <h2 className=" text-center text-gray-900 text-2xl font-semibold">
          Iniciar Sesión
        </h2>
        <span className=" text-center text-sm text-gray-500 my-2 block ">
          Comienza a compartir tu perfil de desarrollador hoy
        </span>
      </section>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-10 lg:w-4/12  sm:w-10/12 mx-auto rounded-4xl flex flex-col shadow-lg  py-5 border border-solid border-gray-300 ">
        <Input
          Placeholder="Ingresa el email"
          label="Email"
          name="email"
          register={register}
          errors={errors}
          Type="text"
          rules={rules.email}
          Icon={Mail}
        />
        <Input
          Placeholder="Ingresa el password"
          label="Password"
          name="password"
          register={register}
          errors={errors}
          Type="password"
          rules={rules.password}
          Icon={Key}
        />
        <section className="w-full flex justify-end">
          <span className="text-sm  my-3 text-end text-blue-600 font-medium ">
            He olvidado mi contraseña
          </span>
        </section>
        <input
          type="submit"
          className="bg-blue-600 px-3  my-2 py-2  text-white rounded-lg font-medium cursor-pointer"
          value="Crear Cuenta"
        />
        <Divider/>
        <section className="mx-auto w-fit">
          <span className="text-gray-500 ">¿No tinenes una Cuenta?</span>
          <Link to="/auth/register" className="text-blue-600 font-semibold">
            {" "}
            Registrate
          </Link>
        </section>
      </form>
    </>
  );
}
