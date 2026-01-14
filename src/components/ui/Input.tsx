import type { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../widgets/ErrorMessage";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

type InputProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  rules: object;
  errors: FieldErrors;
  options?: Object;
  Icon?: LucideIcon;
  Type: string;
  Placeholder?: string;
};

const Input = ({
  label,
  name,
  register,
  rules,
  errors,
  Icon,
  Type,
  Placeholder,
}: InputProps) => {
  const [activeInput, setActiveInput] = useState(false);
  return (
    <div className=" w-full my-2">
      <label className=" inline-block w-full text-gray-700 text-sm font-semibold">
        {label}
      </label>
      {Icon && (
        <Icon
          className={`size-5 text-gray-400 mt-6 ml-3 absolute`}
        />
      )}

      <input
        id={name}
        className="w-full rounded-xl text-sm border  border-gray-300 px-10 mt-1 py-5
         focus:outline-none focus:border focus:border-solid focus:border-blue-300 focus:transition-all
         transition"
        type={Type}
        onClick={() => setActiveInput(true)}
        placeholder={Placeholder}
        {...register(`${name}`, rules)}
      />

      {errors[`${name}`] && (
        <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
      )}
    </div>
  );
};

export default Input;
