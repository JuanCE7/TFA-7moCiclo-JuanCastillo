import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav
      className="flex justify-around py-4 px-10 rounded-md"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
      }}
    >
      <Link to={isAuthenticated ? "/tasks" : "/"} className="flex items-center">
        <img src="./src/img/logo1.png" alt="Logo" className="h-20 w-60" />
      </Link>
      <ul className="flex gap-x-2 my-5">
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to="/add-task"
                className="bg-slate-800 text-white px-7 py-1 rounded-md border-white border-2 m-5  hover:bg-white hover:text-slate-700 hover"
              >
                Solicitar Ayudantía
              </Link>
            </li>
              <li className="text-white text-2xl">
                Bienvenido {user.username}
              </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
                className="bg-slate-800 text-white px-7 py-1 rounded-md border-white border-2 m-5  hover:bg-white hover:text-slate-700 hover"
              >
                Cerrar Sesión
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="bg-slate-800 text-white px-7 py-1 rounded-md border-white border-2 m-5  hover:bg-white hover:text-slate-700 hover"
              >
                Acceder al Sistema
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-slate-800 bg-opacity-80 text-white px-7 py-1 rounded-md border-white border-2  hover:bg-white hover:text-slate-700"
              >
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
