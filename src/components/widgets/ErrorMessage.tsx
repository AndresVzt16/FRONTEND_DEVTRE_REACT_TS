import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Collapse in={!!children}  timeout={300}>
      <Alert severity="error">
        
        <p className=" text-sm font-medium text-red-600 text-sm">
          {children}
        </p>
      </Alert>
    </Collapse>
    </>
  );
};

export default ErrorMessage;
