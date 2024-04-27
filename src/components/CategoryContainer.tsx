import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
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

  return (
    <div className="shadow-md p-2 rounded-md bg-red-300">
      <h2 className="text-2xl font-semibold ">{categoryTitle}</h2>
      <div className="tasks p-5 flex flex-col gap-2">
        <SortableContext items={tasks} strategy={noSortingStrategy}>
          {filteredTasks.map((fltrTask) => (
            <TaskCard
              key={fltrTask.id}
              taskId={fltrTask.id}
              taskTitle={fltrTask.title}
              taskDescription={fltrTask.description}
              taskDate={fltrTask.date}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default CategoryContainer;
