function HomePage() {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="bg-blue-950 bg-opacity-40 max-w-md w-full p-10 rounded-md">
        <h3 class="text-xl font-bold leading-6 text-white">
          Módulo de Gestión de Ayudantías de Cátedra
        </h3>
        <img src="./src/img/logo1.png" alt="Logo" className="h-200 w-100" />
        <hr class="my-12 h-1.5 border-t-0 bg-red-600 opacity-100 dark:opacity-50" />
        <p class="mt-2 text-sm text-white">
          Las Ayudantías de Cátedra de la Universidad Nacional de Loja a tu alcance
        </p>
        <a
          href="#"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:text-slate-700"
        >
          Consultar Estado de trámite
        </a>
      </div>
    </div>
  );
}

export default HomePage;
