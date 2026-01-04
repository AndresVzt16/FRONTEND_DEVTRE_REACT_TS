import type { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import type { LucideIcon } from "lucide-react";
type InputProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: object;
  errors: FieldErrors;
  options?: Object;
  Icon?: LucideIcon;
};

const Input = ({ label, name, register, rules, errors, Icon }: InputProps) => {
  return (
    <div className=" w-full">
      <label className=" inline-block w-full">{label}</label>
      {Icon && <Icon className="size-5 absolute " />}

      <input
        id={name}
        className="w-full rounded-md border border-gray-300 px-3 py-2
         focus:outline-none
         transition"
        type="text"
        {...register(`${name}`, rules)}
      />
      
      {errors[`${name}`] && <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>}
    </div>
  );
};

export default Input;
