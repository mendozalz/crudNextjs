import { prisma } from "@/src/libs/prisma";
import TaskCard from "../components/TaskCard";

const Tareas = async () => {
  // Solicitud si la DB esta en un servidor aparte
  /* const res = await fetch("http://localhost:3000/api/task");
  const data = await res.json(); */

  return await prisma.task.findMany();
};

//export const revalidate = 60;
export const dynamic = "force-dynamic";

const Home = async () => {
  const verTareas = await Tareas();
  return (
    <div>
      <div class="flow-root w-9/12 md:w-9/12 lg:w-7/12 m-auto mt-10">
        <dl class="-my-3 divide-y divide-gray-100 text-sm">
          <div class="grid grid-cols-5 md:grid-cols-6 gap-4">
            <dt class="col-span-1 font-bold text-white">Title</dt>
            <dd class="col-span-2 font-bold text-white hidden md:block">
              Description
            </dd>
            <dd class="col-span-2 text-white justify-between md:block md:col-span-2 text-end hidden md:block font-bold">
              Date
            </dd>
          </div>
          {verTareas.map((tarea) => (
            <TaskCard tarea={tarea} key={tarea.id} />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Home;
