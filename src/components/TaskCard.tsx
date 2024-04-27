import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  taskDate: string;
}

const TaskCard = ({ taskId, taskTitle, taskDescription, taskDate }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: taskId });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="bg-slate-200 p-2 flex flex-col md:flex-row justify-between rounded-md"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="task-info">
        <div className="title-box flex gap-2 text-lg font-medium">
          <input type="checkbox" />
          <p className="task-title">{taskTitle}</p>
        </div>
        <p className="task-desc ml-10 mt-2">{taskDescription}</p>
      </div>
      <div className="task-opt flex items-center">
        <p className="task-date">{taskDate}</p>
      </div>
    </div>
  );
};

export default TaskCard;
