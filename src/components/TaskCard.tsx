import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import useTaskCraftStore from "../store";

interface Props {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  taskDate: string;
  isCompleted: boolean;
}

const TaskCard = ({
  taskId,
  taskTitle,
  taskDescription,
  taskDate,
  isCompleted,
}: Props) => {
  const tasks = useTaskCraftStore((s) => s.tasks);
  const setTasks = useTaskCraftStore((s) => s.setTasks);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: taskId.toString() });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleDeleteClick = () => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleIsTaskComplete = () => {
    console.log("Hello");

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) task.isCompleted = true;

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div
      className="bg-slate-200 p-2 flex flex-col md:flex-row justify-between rounded-md touch-none"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="task-info">
        <div className="title-box flex gap-2 text-lg font-medium">
          <button className="text-sm" onMouseDown={handleIsTaskComplete}>
            {isCompleted ? (
              <FaCircleCheck className="text-green-600" />
            ) : (
              <FaRegCircle />
            )}
          </button>
          <p
            className={`task-title ${
              isCompleted ? "line-through" : ""
            } text-slate-800`}
          >
            {taskTitle}
          </p>
        </div>
        <p
          className={`task-desc ml-10 mt-2 text-sm text-slate-400 ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {taskDescription}
        </p>
      </div>
      <div className="task-opt flex flex-row items-center gap-5">
        <p className="task-date text-sm text-slate-600">{taskDate}</p>
        <button
          className="bg-red-100 p-1 rounded-md text-red-600 cursor-pointer"
          onMouseDown={handleDeleteClick}
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
