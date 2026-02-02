import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/Services";
import { Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";

export default function PrivateLayout() {
  const { data, isLoading, isError } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>...Cargando</p>;
  if (isError) return <Navigate to="/login" />;
  if (data) return <AppLayout data={data} />;
  
  return null;
}