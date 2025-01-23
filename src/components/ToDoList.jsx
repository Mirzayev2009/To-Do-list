import { DndContext } from "@dnd-kit/core";
import Column from "./Column";

export default function ToDoList({ todoList, setTodoList }) {
  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const todoId = active.id;
    const newStatus = over.id;

    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, status: newStatus }; // Update the status of the todo
        }
        return todo; // No change for other todos
      });
    });
  }

  const COLUMNS = [
    { id: "TODO", title: "To Do", color: "bg-red-600" },
    { id: "IN-PROGRESS", title: "In Progress", color: "bg-yellow-500" },
    { id: "DONE", title: "Done", color: "bg-green-600" },
  ];

  return (
    <div className="w-full h-96 flex justify-evenly items-center">
      <DndContext onDragEnd={handleDragEnd}>
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            todoList={todoList.filter((todo) => todo.status === column.id)}
            setTodoList = {setTodoList}
          />
        ))}
      </DndContext>
    </div>
  );
}

