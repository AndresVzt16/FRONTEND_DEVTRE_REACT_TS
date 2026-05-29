import React from "react";
import type { UserHandle } from "../../../../types";
import FontPage from "./FontPage";

type dataHandleProps = {
  data: UserHandle;
};
const HandleProfile = ({ data }: dataHandleProps) => {
  return (
    <div className=" bg-amber-400 w-full h-screen ">
      <FontPage />
      <section className="relative flex bg-amber-800 px-10 h-fit">
        <article className="rounded-full   ">
          <img
            src={`${data.image}`}
            className="rounded-full border-2 relative   size-56"
            alt=""
          />
        </article>
        <p className="text-5xl text-center font-semibold">@{data.handle}</p>
      </section>
    </div>
  );
};

export default HandleProfile;
