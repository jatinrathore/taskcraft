import { SortableContext } from "@dnd-kit/sortable";
import useTaskCraftStore from "../store";
import TaskCard from "./TaskCard";

// Custom sorting strategy to prevent dragging
const noSortingStrategy = () => ({
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
});

const CategoryContainer = ({ categoryTitle }: { categoryTitle: string }) => {
  const tasks = useTaskCraftStore((s) => s.tasks);

  const filteredTasks = tasks.filter(
    (task) => task.category.title === categoryTitle
  );

  if (filteredTasks.length === 0) return <></>;

  return (
    <div className="shadow-md p-5 mx-0 md:mx-12 lg:mx-16 rounded-2xl border-2 border-gray-200">
      <div className="flex flex-row gap-2 items-center text-slate-600">
        <h2 className="text-xl md:text-2xl font-semibold ">{categoryTitle}</h2>
        <p className="text-xs md:text-sm">{`(${filteredTasks.length})`}</p>
      </div>
      <div className="tasks py-5 px-0 md:px-8 lg:px-10 flex flex-col gap-2">
        <SortableContext items={tasks} strategy={noSortingStrategy}>
          {filteredTasks.map((fltrTask) => (
            <TaskCard
              key={fltrTask.id}
              taskId={fltrTask.id}
              taskTitle={fltrTask.title}
              taskDescription={fltrTask.description}
              taskDate={fltrTask.date}
              isCompleted={fltrTask.isCompleted}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default CategoryContainer;
