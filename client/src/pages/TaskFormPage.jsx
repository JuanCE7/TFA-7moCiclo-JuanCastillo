import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("tittle", task.tittle);
        setValue("description", task.description);
        setValue("date", dayjs().utc(task.date).format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);
  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date
        ? dayjs().utc(data.date).format()
        : dayjs().utc().format(),
    };
    if (data.date) dataValid.date = dayjs().utc(data.date).format();
    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate("/tasks");
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <label className="text-white" htmlFor="title">
          Título
        </label>
        <input
          type="text"
          placeholder="tittle"
          {...register("tittle")}
          className="w-full my-2 bg-zinc-700 text-white px-4 py-2 rounded-md"
          autoFocus
        />
        <label className="text-white" htmlFor="description">
          Descripción
        </label>
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full my-2 bg-zinc-700 text-white px-4 py-2 rounded-md"
        ></textarea>
        <label htmlFor="date" className="text-white">
          Fecha
        </label>
        <input
          className=" w-full my-2 bg-zinc-700 text-white px-4 py-2 rounded-md"
          type="date"
          {...register("date")}
        />

        <button className="bg-indigo-500 px-3 py-2 rounded-md text-white">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;
