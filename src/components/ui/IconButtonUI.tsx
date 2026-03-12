import React from "react";
import IconButton from "@mui/material/IconButton";
import type { IconType } from "react-icons";
import { useTheme } from "@mui/material/styles";
import { darken, lighten, getContrastRatio } from "@mui/material/styles";

type IconButtonProps = {
  type?: "button" | "submit" | "reset";
  Icon: IconType;
  Color:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit"
    | "default";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const IconButtonUI = ({ Icon, Color, size, onClick, type }: IconButtonProps) => {
   const theme = useTheme();

  const baseColor =
    Color !== "inherit" && Color !== "default"
      ? theme.palette[Color].main
      : theme.palette.text.primary;

  const hoverColor =
    getContrastRatio(baseColor, "#fff") > 4
      ? lighten(baseColor, 0.2)
      : darken(baseColor, 0.2);

  return (
    <>
      <IconButton type={type ? type: 'button'}  color={Color} size={size ? size : "medium"} onClick={onClick}>
        {Icon && <Icon color="currentColor" className={`size-5`} />}
      </IconButton>
    </>
  );
};

export default IconButtonUI;
