import React from "react";

const NotFoundView = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <img src="/404.svg" alt="" className=" size-72" />
        <p className=" w-full font-bold text-xl mt-5 text-center text-slate-800">
          No pudimos encontrar este recurso.
        </p>
        <p className="text-gray-600">Si evidencias que es un error de la plataforma, por favor ponte en contacto con nosotros.</p>
      </div>
    </>
  );
};

export default NotFoundView;
