import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/Services";
import { useNavigate } from "react-router-dom";
import Devtree from "../components/Devtree";
export default function AppLayout() {
  const { data, isLoading, error, isError } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
    retry: 1,
    refetchOnWindowFocus: false,
  });
  const navigate = useNavigate();
  if (isLoading) return "...Cargando";
  if (isError) return navigate("/auth/login");
  if (data) return <Devtree data={data} />;
}
