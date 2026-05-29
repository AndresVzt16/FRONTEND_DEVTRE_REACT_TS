import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Mail, Key } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../../../../components/ui/Input";
import Divider from "../../../../components/ui/Divider";
import type { LoginForm } from "../../../../types";
import { useMutation } from "@tanstack/react-query";
import { authenticateUser } from "../../../../services/Services";
import { toast } from "sonner";
import Button from "../../../../components/ui/Button";
const FormLogin = () => {
  const navigate = useNavigate();
  const initialValues: LoginForm = {
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ defaultValues: initialValues });

  const rules = {
    email: {
      required: "El email es obligatorio.",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "E-mail no válido",
      },
    },
    password: { required: "El password es obligatorio." },
  };

  const loginMutation = useMutation({
    mutationKey: ["Login"],
    mutationFn: (formData: LoginForm) => authenticateUser(formData),
    onSuccess: () => navigate("/admin"),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { mutate, status } = loginMutation;

  const handleLogin = async (formData: LoginForm) => {
    mutate(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-12 xs:max-w-xs   sm:max-w-md mx-auto rounded-xl flex flex-col gap-5 shadow-lg pt-10 pb-10 border border-solid border-gray-300 ">
        <section className="text-center  justify-center h-full">
          <h2 className=" text-center text-gray-900 text-2xl font-semibold">
            Iniciar Sesión
          </h2>
          <span className=" text-center text-sm text-gray-500 my-2 block ">
            Comienza a compartir tu perfil de desarrollador hoy
          </span>
        </section>
        <Input
          Placeholder="Ingrese su dirección de correo electronico"
          label="Email"
          name="email"
          Size="small"
          register={register}
          errors={errors}
          Type="email"
          rules={rules.email}
          Icon={Mail}
        />
        <Input
          Placeholder="Ingresa el password"
          label="Password"
          name="password"
          register={register}
          errors={errors}
          Size="small"
          Type="password"
          rules={rules.password}
          Icon={Key}
        />
        <section className="w-full flex justify-end">
          <span className="text-sm   text-end text-blue-600 font-medium ">
            He olvidado mi contraseña
          </span>
        </section>
        <Button
          text="Iniciar Sesion"
          loading={status === "pending" ? true : false}
          type="submit"
        />
        <Divider />
        <section className="mx-auto w-fit">
          <span className="text-gray-500 ">¿No tinenes una Cuenta?</span>
          <Link to="/register" className="text-blue-600 font-semibold">
            {" "}
            Registrate
          </Link>
        </section>
      </form>
    </>
  );
};

export default FormLogin;
