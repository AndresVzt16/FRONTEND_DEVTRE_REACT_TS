import type { DevtreeLink } from "../../../../types";
type propsDevtreLink = {
  data: DevtreeLink;
};

const DevTreeLink = ({ data }: propsDevtreLink) => {
  console.log(data);
  return (
    <article className="flex  items-center gap-2  py-2  ">
      <img src={`/social/icon_${data.name}.svg`} alt="" className="size-7" />
      <p className=" text-sm text-gray-800">
        Visitame en <span className="font-bold">{data.name}</span>
        </p>
    </article>
  );
};

export default DevTreeLink;
