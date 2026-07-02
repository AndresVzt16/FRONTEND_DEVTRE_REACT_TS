import type { IconType } from "react-icons";

type TagInformationProps = {
  Label?: string;
  Icon?: IconType;
  value: string | number;
  color?: string;
};

const isHexColor = (color?: string) => {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color || "");
};

const TagInformation = ({ Label, Icon, value, color }: TagInformationProps) => {
  const bgStyle = isHexColor(color) ? { backgroundColor: color } : undefined;

  const bgClass = isHexColor(color) ? "" : (color ?? "bg-slate-50");

  return (
    <article
      className={`w-fit space-y-2.5 flex rounded-2xl border border-gray-200 animate-ease-out ${bgClass}`}
      style={bgStyle}>
      <div
        className={`flex  items-center gap-2.5 text-sm w-full text-slate-600 px-3 py-2 `}
        style={bgStyle}>
        <div className="flex items-center justify-center w-8 h-8  shadow-md  bg-blue-900 rounded-xl text-white" >
          {Icon && <Icon className="size-4 " />}
        </div>

        <div>
          {Label && <p className="text-xs text-slate-500">{Label}</p>}
          <p className="font-medium text-slate-700">{value}</p>
        </div>
      </div>
    </article>
  );
};

export default TagInformation;
