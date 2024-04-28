import {
  closestCorners,
  DndContext,
  DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import useTaskCraftStore from "../store";
import CategoryContainer from "./CategoryContainer";
import CreateTaskModal from "./CreateTaskModal";
import DeleteCategoryModal from "./DeleteCategoryModal";
import SearchComponent from "./SearchComponent";
import SortByDate from "./SortByDate";
import CreateCategoryModal from "./CreateCategoryModal";

const TaskContainer = () => {
  const categories = useTaskCraftStore((s) => s.categories);
  const tasks = useTaskCraftStore((s) => s.tasks);
  const setTasks = useTaskCraftStore((s) => s.setTasks);

  const getTask = (id: string) => tasks.find((task) => task.id === id);

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    const targetedTask = getTask("" + over?.id);

    if (!targetedTask || !targetedTask.category) return; // Add this null check

    const updatedTasks = tasks.map((task) => {
      if (task.id === active.id) {
        // Update the category ID and title of the active task
        return {
          ...task,
          category: {
            id: targetedTask!.category.id,
            title: targetedTask!.category.title,
          },
        };
      }
      return task;
    });

    // Update tasks state in the store
    setTasks(updatedTasks);
  };

  return (
    <div className="p-5 h-auto min-h-screen">
      <div className="crud-box mb-8 flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center mb-6">
          <div className="mb-3 lg:mb-0">
            <CreateTaskModal />
            <CreateCategoryModal />
          </div>
          <div>
            <SortByDate />
            {categories.length > 0 ? <DeleteCategoryModal /> : ""}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <SearchComponent />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {tasks.length === 0 ? (
          <h2 className="text-center text-xl md:text2xl text-slate-500 font-bold">
            No tasks found. Create a task now!
          </h2>
        ) : (
          <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
            sensors={sensors}
          >
            {categories.map((category) => (
              <CategoryContainer
                key={category.id}
                categoryTitle={category.title}
              />
            ))}
          </DndContext>
        )}
      </div>
    </div>
  );
};

export default TaskContainer;
