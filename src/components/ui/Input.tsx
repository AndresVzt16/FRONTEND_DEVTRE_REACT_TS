import type { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

type InputProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: object;
  errors: FieldErrors;
  options?: Object;
  Icon?: LucideIcon;
  Type:string;
  Placeholder?:string
};

const Input = ({ label, name, register, rules, errors, Icon , Type , Placeholder}: InputProps) => {
  const activeInput = useState(false)
  return (
    <div className=" w-full ">
      <label className=" inline-block w-full text-gray-950 font-semibold">{label}</label>
      {Icon && <Icon className={"size-5 text-gray-400 mt-4 ml-3 absolute "} />}

      <input
        id={name}
        className="w-full rounded-md border border-gray-300 px-10 py-3
         focus:outline-none
         transition"
        type={Type}
        placeholder={Placeholder}
        {...register(`${name}`, rules)}
        
      />
      
      {errors[`${name}`] && <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>}
    </div>
  );
};

export default Input;
