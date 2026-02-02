
import FormRegister from "./Components/RegisterForm";

export default function RegisterView() {
  
  return (
    <>
      <section className="text-center my-10 ">
        <h2 className=" text-center text-gray-900 text-2xl font-semibold">
          Crea tu cuenta
        </h2>
        <span className=" text-center text-sm text-gray-500 my-2 block ">
          Comienza a compartir tu perfil de desarrollador hoy
        </span>
      </section>
      <FormRegister/>
    </>
  );
}
