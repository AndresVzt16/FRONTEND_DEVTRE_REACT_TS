import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {

  return (
    <>
      <main
        className={`border px-6 py-3 border-gray-100 shadow bg-white rounded-2xl ${className}`}
      >
        {children}
      </main>
    </>
  );
};

export default Card;