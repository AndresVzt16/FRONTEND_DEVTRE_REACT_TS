import { BadgeX, ShieldX} from "lucide-react";
const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <article className="bg-red-50 border border-solid border-red-100 my-2 py-2 px-4 text-red-700 rounded flex gap-2 items-center">
        <ShieldX className="size-4" />
        <p className=" text-sm font-semibold">
          {children}
        </p>
      </article>
    </>
  );
};

export default ErrorMessage;
