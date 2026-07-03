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
  return (
    <>
      <Card>
        <HeaderCard>
          <article className=" flex justify-center">
            {isLoading ? (
              
              <CircularProgress />

            ) : (
              < >
                {isError ? (
                  <XCircle className="size-16 text-red-500" />
                ) : (
                  <CheckCircle className="size-16 text-green-500" />
                )}
                <h1 className="text-2xl font-bold">{`${isError ? error.message : data.message}`}</h1>
              </>
            )}
          </article>
        </HeaderCard>
        <Divider />
      </Card>
    </>
  );
  /* if (isError) return <ErrorMessage >{error.message}</ErrorMessage> ; */
};

export default CardNotification;
