import { useDraggable } from "@dnd-kit/core";

export default function TaskCard({ todo, todoList, setTodoList }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: todo.id,
  });

  // Function to handle the removal of a todo item
  function handleClick(todo) {
    // Log before and after deleting for debugging
    const updatedTodos = todoList.filter((item) => item.id !== todo.id);
    console.log("Before deleting:", todoList);
    setTodoList(updatedTodos);
    console.log("After deleting:", updatedTodos);

  }

  

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-lg bg-white p-4 shadow-sm hover:shadow-md"
      style={style}
    >
      <div className="flex justify-between items-center relative">
        <h3 className="font-medium text-gray-800">{todo.title}</h3>
        <button
          className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center absolute top-0 right-0"
          onClick={() => handleClick(todo)}
        >
          X
        </button>
      </div>
    </div>
  );
}



