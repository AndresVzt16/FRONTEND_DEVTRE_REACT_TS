import { useState } from "react";
import SearchForm from "./components/SearchForm";
const HomeView = () => {
  const [count, setCount] = useState(20000);

  return (
    <main className="flex  bg-gray-50 items-center md:bg-[url('/bg.svg')] bg-no-repeat bg-right min-h-[95vh] ">
      <div className=" mx-10  justify-center items-center  lg:w-1/2">
        <div className="lg:p-0 space-y-6">
          <h1 className=" text-6xl font-bold text-gray-950">
            Todas tus <span className="text-blue-800">Redes sociales</span> en
            un solo lugar.
          </h1>
          <p className="text-slate-900-800 ">
            Unete a la gran comunidad de desarrolladores, somos mas de + {count}
            , comparte tu perfil de Github, TikTok, Facebook, Instagram,
            Youtube, y más.{" "}
          </p>
          <section>
            
            <SearchForm />
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomeView;
