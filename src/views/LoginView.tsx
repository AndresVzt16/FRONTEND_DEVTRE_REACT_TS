import { Link } from "react-router-dom";
export default function LoginView() {
  return (
    <>

      <nav>
        <span>¿No tinenes una Cuenta?</span><Link to="/auth/register">Registrate</Link>
      </nav>
    </>
  );
}
