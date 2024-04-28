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
    <div className="p-5 h-screen">
      <div className="crud-box text-center">
        <CreateTaskModal />
        <SortByDate />
        {categories.length && <DeleteCategoryModal />}
        <SearchComponent />
      </div>
      <div className=" flex flex-col gap-5">
        {/* For Making Tasks Dragable */}
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
      </div>
    </div>
  );
};

export default TaskContainer;
