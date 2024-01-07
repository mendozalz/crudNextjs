import Link from "next/link";

const Navegacion = () => {
  return (
    <header class="bg-gray-800">
      <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-4 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <div class="text-center sm:text-left">
              <h1 class="text-2xl font-bold text-gray-200 sm:text-3xl text-left px-6 sm:px-0">
                Mendozalz - TODO
              </h1>
              <p class="mt-1.5 text-sm text-gray-500 text-left px-6 sm:px-0">
                Bienvenido a mi creador de lista de tareas por hacer 🎉
              </p>
            </div>
          </Link>

          <div class="mt-4 flex  justify-around gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link href="/about">
              <button
                class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span class="text-sm font-medium"> About </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </Link>

            <Link href="/formulario">
              <button
                class="block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Create Task
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navegacion;
