import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import useTaskCraftStore from "../store";
import CategoryContainer from "./CategoryContainer";

const TaskContainer = () => {
  const categories = useTaskCraftStore((s) => s.categories);
  const tasks = useTaskCraftStore((s) => s.tasks);
  const setTasks = useTaskCraftStore((s) => s.setTasks);

  const getTask = (id: string) => tasks.find((task) => task.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    const targetedTask = getTask("" + over?.id);

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
    <div className="p-5 h-screen flex flex-col gap-5">
      {/* For Making Tasks Dragable */}
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        {categories.map((category) => (
          <CategoryContainer key={category.id} categoryTitle={category.title} />
        ))}
      </DndContext>
    </div>
  );
};

export default TaskContainer;
