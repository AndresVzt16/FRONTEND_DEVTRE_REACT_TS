import FormLogin from "./Components/FormLogin";
export default function LoginView() {
  return (
    <>
      <div className=" w-full">
        <section className="text-center  justify-center h-full">
          <h2 className=" text-center text-gray-900 text-2xl font-semibold">
            Iniciar Sesión
          </h2>
          <span className=" text-center text-sm text-gray-500 my-2 block ">
            Comienza a compartir tu perfil de desarrollador hoy
          </span>
        </section>
        <FormLogin />
      </div>
    </>
  );
}
