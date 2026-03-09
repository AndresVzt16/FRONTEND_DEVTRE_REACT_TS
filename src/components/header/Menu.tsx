import { User } from "lucide-react";
import { useState } from "react";
import type { TUser } from "../../types";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

interface Props {
  userData: TUser;
}

const MenuUI = ({ userData }: Props) => {
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSession = () => {
    localStorage.removeItem("AUTH_TOKEN");
    navigation("/login");
  };

  return (
    <>
      <section className="flex items-center">
        <section>
          {/* <p className=" text-white text-sm text-right ">@{userData.handle}</p>
          <p className=" text-gray-400 text-xs">{userData.email}</p> */}
        </section>
        {userData.image ? (
          <article>
            <IconButton>
              <Avatar className="border-2 border-slate-500">
                <img
                  src={userData.image}
                  alt=""
                  className="text-gray-500 bg-gray-100 size-10 "
                  onClick={handleClick}
                />
              </Avatar>
            </IconButton>
          </article>
        ) : (
          <User className="text-gray-500 border bg-gray-100   size-10 px-2 border-gray-600 rounded-full " />
        )}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleCloseSession}>Cerrar sesión</MenuItem>
        </Menu>
      </section>
    </>
  );
};

export default MenuUI;
