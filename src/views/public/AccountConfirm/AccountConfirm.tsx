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
    <main className="relative flex min-h-lvh items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_10%_10%,#d9f4ff_0%,#f0f9ff_35%,#ecfeff_100%)] px-4 py-8 sm:px-6">
      <span className="pointer-events-none absolute -left-20 top-14 h-56 w-56 animate-pulse rounded-full bg-cyan-300/35 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 bottom-12 h-72 w-72 animate-delay-300 animate-pulse rounded-full bg-sky-300/30 blur-3xl" />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.5)_48%,transparent_100%)] opacity-50" />

      <section className="relative z-10 w-full max-w-2xl">
        <CardNotification
          isLoading={isLoading}
          isError={isError}
          data={data}
          error={error!}
        />
      </section>
    </main>
  );
};

export default AccountConfirm;
