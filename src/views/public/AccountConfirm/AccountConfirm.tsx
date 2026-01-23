import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { activateAccout } from "../../../services/Services";
import CardNotification from "./components/CardNotification";

const AccountConfirm = () => {
  const { token } = useParams();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["AccountConfirm", token],
    queryFn: () => activateAccout(token!),
    enabled: !!token,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return (
    <main className="flex justify-center items-center bg-gray-50 h-lvh pt-5">
      <CardNotification
        isLoading={isLoading}
        isError={isError}
        data={data}
        error={error!}
      />
    </main>
  );
};

export default AccountConfirm;
