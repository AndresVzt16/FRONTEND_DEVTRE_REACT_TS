import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { isHexColor } from "../../utils";

type ButtonProps = {
  loading?: boolean;
  text?: string;
  type?: "button" | "submit" | "reset";
  Icon?: LucideIcon | IconType;
  fn?: () => void;
  color?: string;
  variant?: "text" | "outlined" | "contained";
};

const ButtonUI = ({
  loading = false,
  text,
  type,
  Icon,
  fn,
  color,
  variant = "contained",
}: ButtonProps) => {
  const bgStyle = isHexColor(color) ? { backgroundColor: color } : undefined;
  const bgClass = isHexColor(color) ? "" : (color ?? "bg-slate-100");

  return (
    <div className={`${bgClass} rounded-2xl w-fit`} style={bgStyle}>
      <Button
        type={type}
        variant={variant}
        onClick={fn}
        disableElevation
        disabled={loading}
        startIcon={Icon ? <Icon size={18} /> : null}
        color={color ? "inherit" : "primary"}
        sx={{
          borderRadius: "6px",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: "400",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {loading ? <CircularProgress size={20} /> : text}
      </Button>
    </div>
  );
};

export default ButtonUI;
