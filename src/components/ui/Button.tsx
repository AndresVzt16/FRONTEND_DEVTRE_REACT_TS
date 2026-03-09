import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

type ButtonProps = {
  loading?: boolean;
  text?: string;
  type?: "button" | "submit" | "reset";
  Icon?: LucideIcon | IconType;
  fn?: () => void;
  
  variant?: "text" | "outlined" | "contained";
};



const ButtonUI = ({
  loading = false,
  text,
  type,
  Icon,
  fn,
  
  variant = "contained",
}: ButtonProps) => {
  return (
    <Button
      type={type}
      variant={variant}
      onClick={fn}
      disableElevation
      disabled={loading}
      startIcon={Icon ? <Icon size={18} /> : null}
      
      sx={{
        borderRadius: "6px",
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? <CircularProgress size={20} /> : text}
    </Button>
  );
};

export default ButtonUI;