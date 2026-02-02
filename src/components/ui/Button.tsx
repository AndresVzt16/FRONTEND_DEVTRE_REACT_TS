import CircularProgress from "@mui/material/CircularProgress";
import type { LucideIcon } from "lucide-react";
type ButtonProps = {
  loading?: boolean; // opcional
  text: string; // string minúscula
  type?: "button" | "submit" | "reset"; // opcional, para pasar type al botón
  Icon?: LucideIcon;
  fn?: () => void;
  priority?:'primary'|'secondary'|'tertiary'
};

type stylePriority = {
  primary:string
  secondary:string
  tertiary:string
}

const Button = ({
  loading = false,
  text,
  type,
  Icon,
  fn,
  priority
}: ButtonProps) => {

  const handlePriority = (priority: keyof stylePriority) => {
    const resultStyle: stylePriority = {
      'primary':'text-white bg-blue-700',
      'secondary':'text-gray-800 bg-white border border-gray-200',
      'tertiary':'text-underline text-blue-700'
    }
    if(resultStyle[priority]){
      return resultStyle[priority];
    }
    return resultStyle.primary

  }
  return (
    <button
      type={type}
      onClick={fn}
      className={`${handlePriority(priority || 'primary')}
          px-5 my-2 py-3   rounded-lg font-medium cursor-pointer flex justify-center items-center gap-2`
      }
      disabled={loading}>
      {Icon && <Icon className={`size-5 ${priority == "primary"? 'text-white' :'text-gray-300'}`} />}
      {loading ? <CircularProgress size={24} color="inherit" /> : text}
    </button>
  );
};

export default Button;
