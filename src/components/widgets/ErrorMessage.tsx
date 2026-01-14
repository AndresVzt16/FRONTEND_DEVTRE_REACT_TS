import { BadgeX, ShieldX} from "lucide-react";
const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <article className="bg-red-50 mt-0 py-2 px-4 text-red-600 rounded flex gap-2 items-center">
        <ShieldX className="size-4" />
        <p className=" text-sm font-medium">
          {children}
        </p>
      </article>
    </>
  );
};

export default ErrorMessage;
