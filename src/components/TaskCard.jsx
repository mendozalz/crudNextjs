"use client";
import { useRouter } from "next/navigation";

const TaskCard = ({ tarea }) => {
  const route = useRouter();

  const editForms = () => {
    route.push(`/tasks/edit/${tarea.id}`);
  };

  const delteTask = async () => {
    const res = await fetch(`/api/tasks/${tarea.id}`, {
      method: "DELETE",
    });
    const data = res.json();
    route.refresh();
  };
  return (
    <div className="wrap relative">
      <div
        className="grid grid-cols-1 gap-1 py-3 md:grid-cols-6 sm:gap-4 hover:bg-slate-800 hover:cursor-pointer"
        onClick={editForms}
      >
        <dt className="font-medium text-white sm:col-span-1">{tarea.title}</dt>

        <p className="md:hidden font-bold mt-2">Description:</p>
        <dd className="text-white sm:col-span-3">{tarea.description}</dd>

        <p className="md:hidden font-bold mt-2">Date:</p>
        <dd className="text-white flex justify-between md:block lg:col-span-1 text-end">
          {new Date(tarea.createdAt).toLocaleDateString()}
        </dd>
      </div>
      <add className="btn-delete absolute top-3 right-0">
        <button
          className="text-white bg-red-600  px-4 rounded-sm"
          onClick={delteTask}
        >
          delete
        </button>
      </add>
    </div>
  );
};

export default TaskCard;
