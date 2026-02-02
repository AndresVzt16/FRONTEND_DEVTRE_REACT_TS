import type { TUser } from "../../../../types";
import { Calendar, Image } from "lucide-react";
interface propsProfile {
  data: TUser;
}

const ProfileLinks = ({ data }: propsProfile) => {
  return (
    <>
      <article className=" bg-white border rounded-2xl border-gray-200  px-5 py-5">
        {data.image ?<img
          src={`${data.image}?t=${Date.now()}`}
          alt=""
          className="size-44 object-cover mb-5 rounded-full mx-auto"
        />:<Image className=" text-gray-300 mx-auto size-44"/>}

        <section className=" flex flex-col gap-1">
          <h2 className="text-gray-900 text-xl text-center font-medium">
            {data.name}
          </h2>
          <p className="text-green-500 text-sm text-center">@{data.handle}</p>
          <p className="text-gray-700 text-sm text-center">
            {data.description}
          </p>
        </section>

        <section className=" flex justify-center gap-5">
          <article className="flex items-center justify-center gap-2">
            <Calendar className=" size-3 text-gray-600" />
            <p className="text-sm text-gray-600">
              Desde <span>{new Date(data.createdAt).getFullYear()}</span>
            </p>
          </article>
        </section>
      </article>
    </>
  );
};

export default ProfileLinks;
