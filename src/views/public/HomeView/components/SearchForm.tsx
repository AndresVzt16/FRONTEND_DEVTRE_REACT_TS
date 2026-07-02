import { useForm } from "react-hook-form";
import slugify from "react-slugify";
import { MdError } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { searchHandle } from "../../../../services/Services";
import { CiSearch } from "react-icons/ci";
import ButtonUI from "../../../../components/ui/Button";
import Collapse from "@mui/material/Collapse";
import Input from "../../../../components/ui/Input";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import { CheckIcon } from "lucide-react";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      handle: "",
    },
  });

  const handle = watch("handle");
  const { data, reset, isPending, isError, error, mutate } = useMutation({
    mutationFn: searchHandle,
    mutationKey: ["SearchHandle"],
  });

  const rules = {
    search: { required: "Este campo no puede ir vacio" },
  };

  const hanldeSearch = () => {
    const slug = slugify(handle);
    mutate(slug);
  };
  useEffect(() => {
    if (!data && !error) return;

    const timer = setTimeout(() => {
      reset();
    }, 5000);

    return () => clearTimeout(timer);
  }, [data, error, reset]);

  return (
    <form
      onSubmit={handleSubmit(hanldeSearch)}
      className=" flex transition-all duration-300 ease-in-out  gap-2 bg-white shadow-xl  border-gray-200 border w-full px-2 py-2 rounded-2xl  items-center">
      <div className=" w-full">
        <section className=" flex items-center gap-2.5 w-full  bg-white rounded-lg">
          <label
            className="px-2 text-sm text-blue-700 font-semibold"
            htmlFor="handle">
            devtree.com/
          </label>
          <Input
            Type="text"
            Placeholder="Busca tu nombre de usuario..."
            errors={errors}
            register={register}
            rules={rules.search}
            name="handle"
            Size="small"
          />
          <ButtonUI
            type="submit"
            loading={isPending}
            Icon={CiSearch}
            text="Buscar"
          />
        </section>
        <section className="w-full">
          <Collapse in={!!(data || error)} timeout={300}>
            <Alert
              severity={error ? "error" : "success"}
              icon={error ? <MdError /> : <CheckIcon />}>
              {error ? (
                error.message
              ) : (
                <div className="flex">
                  <p>{data}</p>
                  <Link
                    state={{ handle: slugify(handle) }}
                    to="/register"
                    className="text-blue-600 hover:underline">
                    Regístrate aquí
                  </Link>
                </div>
              )}
            </Alert>
          </Collapse>
        </section>
      </div>
    </form>
  );
};

export default SearchForm;
