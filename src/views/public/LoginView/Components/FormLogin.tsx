import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Mail, Key } from "lucide-react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
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
        className="bg-white px-10 lg:w-4/12  sm:w-10/12 mx-auto rounded-4xl flex flex-col shadow-lg  py-5 border border-solid border-gray-300 ">
        <Input
          Placeholder="Ingresa el email"
          label="Email"
          name="email"
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
          Type="password"
          rules={rules.password}
          Icon={Key}
        />
        <section className="w-full flex justify-end">
          <span className="text-sm  my-3 text-end text-blue-600 font-medium ">
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
          <Link to="/auth/register" className="text-blue-600 font-semibold">
            {" "}
            Registrate
          </Link>
        </section>
      </form>
    </>
  );
};

export default FormLogin;
