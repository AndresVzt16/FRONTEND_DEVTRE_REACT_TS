import { Link } from "react-router-dom";
export default function LoginView() {
  return (
    <>

      <nav>
        <span className="text-avocado-500">¿No tinenes una Cuenta?</span><Link to="/auth/register">Registrate</Link>
      </nav>
    </>
  );
}
