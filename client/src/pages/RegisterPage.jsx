import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white max-w-md w-full rounded-md">
        <div className="bg-gray-300 max-w-md w-full p-5 rounded-md">
          {registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))}
          <h1 className="text-2xl font-bold text-center text-blue-950">
            Registro
          </h1>
        </div>
        <div className="bg-white max-w-md w-full p-5 rounded-md">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Nombre de usuario:</label>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full  px-4 py-2 rounded-md my-2 border-gray-200 border-2 focus:outline-sky-500"
              placeholder="Ingrese su nombre de usuario"
            />
            {errors.username && (
              <p className="text-red-500">Se requiere un nombre de usuario</p>
            )}
            <label htmlFor="">Correo:</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 rounded-md my-2 border-gray-200 border-2 focus:outline-sky-500"
              placeholder="Ingrese su correo electrónico"
            />
            {errors.email && <p className="text-red-500">Se requiere un correo electrónico</p>}
            <label htmlFor="">Contraseña:</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 rounded-md my-2 border-gray-200 border-2 focus:outline-sky-500"
              placeholder="Ingrese su contraseña"
            />
            {errors.password && (
              <p className="text-red-500">Se requiere una contraseña</p>
            )}
            <button
              type="submit"
              className="bg-blue-950 text-white px-4 py-1 rounded-md mx-auto block hover:text-slate-500"
            >
              Registrar
            </button>
          </form>
        </div>
        <div className="bg-gray-300 max-w-md w-full p-5 rounded-md ">
          <p className="flex gap-x-2 justify-between ">
            Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-sky-500 hover:text-slate-800">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
