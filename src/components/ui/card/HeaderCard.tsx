import React from "react";

const HeaderCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="text-center  py-2 rounded-md text-2xl">
      {children}
    </header>
  );
};

export default HeaderCard;
