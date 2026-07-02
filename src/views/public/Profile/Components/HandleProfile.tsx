import type { UserHandle } from "../../../../types";
import CardProfile from "./CardProfile";

type DataHandleProps = {
  data: UserHandle;
};
const HandleProfile = ({ data }: DataHandleProps) => {
  return (
    <div className="w-full items-center flex justify-center  h-screen">
      <CardProfile data={data}/>
    </div>
  );
};

export default HandleProfile;
