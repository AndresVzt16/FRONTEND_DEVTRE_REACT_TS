import CircularProgress from "@mui/material/CircularProgress";
import Card from "../../../../components/ui/card/Card";
import HeaderCard from "../../../../components/ui/card/HeaderCard";
import Divider from "@mui/material/Divider";
import { XCircle, CheckCircle } from "lucide-react";

interface CardNotificationProps {
  isLoading: boolean;
  isError: boolean;
  data: { message: string };
  error: { message: string };
}

const CardNotification = ({
  isLoading,
  isError,
  data,
  error,
}: CardNotificationProps) => {
  if (isLoading) return <CircularProgress />;
  return (
    <>
      <Card>
        <HeaderCard>
          <article className=" flex justify-center">
            {isError ? (
              <XCircle className="size-16 text-red-500" />
            ) : (
              <CheckCircle className="size-16 text-green-500" />
            )}
          </article>
          <h1 className="text-2xl font-bold">{`${isError ? error.message : data}`}</h1>
        </HeaderCard>
        <Divider />
        
      </Card>
    </>
    
  );
  /* if (isError) return <ErrorMessage >{error.message}</ErrorMessage> ; */
};

export default CardNotification;
