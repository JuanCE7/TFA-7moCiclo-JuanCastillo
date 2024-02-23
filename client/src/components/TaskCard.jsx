import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-500 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between ">
        <h1 className="text-2xl font-bold text-white">{task.tittle} </h1>
        <div className="flex gap-x-2 items-center">
          <Link
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white"
            to={`/tasks/${task._id}`}
          >
            Editar
          </Link>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white"
          >
            Rechazar
          </button>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p> {dayjs(task.date).utc().format("DD/MM/YYYY")} </p>
    </div>
  );
}

export default TaskCard;
