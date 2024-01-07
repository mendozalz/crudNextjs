"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Formulario = ({ params }) => {
  const redirect = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const enviar = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      const data = await res.json();
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      const data = await res.json();
    }
    redirect.push("/");
    redirect.refresh();
  };
  return (
    <section class="bg-white">
      <div class="lg:grid lg:h-[calc(100vh-100px)] lg:grid-cols-12">
        <section class="relative flex h-32 md:h-[40vh] items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="absolute inset-0 h-full w-full object-cover opacity-30"
          />

          <div class="hidden lg:relative lg:block lg:p-12">
            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Vamos a crear tus tareas 📝
            </h2>

            <p class="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-slate-100 pt-20">
          <div class="w-[90%] lg:max-w-3xl">
            <div class="relative -mt-16 block lg:hidden">
              <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Creando Tareas 🦑
              </h1>

              <p class="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form class="mt-8 grid grid-cols-6 gap-6" onSubmit={enviar}>
              <div class="col-span-6 sm:col-span-8">
                <label
                  htmlFor="title"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nueva tarea
                </label>

                <input
                  type="text"
                  id="title"
                  name="Nueva_tarea"
                  class="mt-1 p-4 w-full rounded-md border-gray-200 bg-gray-200 text-sm text-gray-700 shadow-sm h-10"
                  placeholder="Ingresa el titulo de tu tarea"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>

              <div class="col-span-6 sm:col-span-8">
                <label
                  htmlFor="description"
                  class="block text-sm font-medium text-gray-700"
                >
                  Agregar tarea
                </label>

                <textarea
                  row="4"
                  id="description"
                  name="Agregar_tarea"
                  class="mt-1 h-20 p-4 w-full rounded-md border-gray-200 bg-gray-200 text-sm text-gray-700 shadow-sm h-10"
                  placeholder="Ingresa tu tarea"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                ></textarea>
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  class={`inline-block rounded-md border ${
                    params.id ? "bg-yellow-500" : "bg-blue-600"
                  } px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500`}
                >
                  {params.id ? "Editar tarea" : "Crear tarea"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Formulario;
