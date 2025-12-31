import type { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: object;
  errors: FieldErrors;
};

const Input = ({ label, name, register, rules, errors }: InputProps) => {
  return (
    <div>
      <span>{label}</span>
      <input type="text" {...register(name, rules)} />
      {errors[name] && <p>{errors[name]?.message as string}</p>}
    </div>
  );
};

export default Input;
