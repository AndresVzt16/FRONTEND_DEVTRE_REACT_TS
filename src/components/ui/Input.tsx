import type { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../widgets/ErrorMessage";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import type { IconType } from "react-icons";

type InputProps = {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: object;
  errors: FieldErrors;
  options?: Object;
  Icon?: IconType;
  Type: string;
  Size?: "small" | "medium";
  Placeholder?: string;
  disabled?: true | false;
  OnChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  /* density?: */
};

const Input = ({
  disabled,
  label,
  name,
  register,
  rules,
  errors,
  Icon,
  Type,
  Size,
  Placeholder,
  OnChange,
}: InputProps) => {
  const registered = register(name, rules);
  return (
    <div className=" w-full ">
      {label && (
        <InputLabel shrink htmlFor="bootstrap-input">
          <span className="font-bold capitalize">{label}</span>
        </InputLabel>
      )}
      <TextField
        fullWidth
        id={name}
        type={Type}
        disabled={disabled ?? false}
        variant="outlined"
        size={Size ?? "medium"}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px", // equivalente a rounded-xl
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
          },
        }}
        placeholder={Placeholder}
        {...registered}
        onChange={(e) => {
          registered.onChange(e);
          OnChange?.(e);
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                {Icon && <Icon className={`size-5 text-gray-300 `} />}
              </InputAdornment>
            ),
          },
        }}
      />
      {errors[`${name}`] && (
        <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
      )}
    </div>
  );
};

export default Input;
