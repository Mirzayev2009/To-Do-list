import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

export default function Column({ column, todoList , setTodoList}) {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div
      className={`flex w-80 flex-col rounded-lg ${column.color} p-4`}
      ref={setNodeRef}
    >
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div className="flex flex-1 flex-col gap-4">
        {todoList.map((todo) => (
          <TaskCard key={todo.id} todo={todo} setTodoList = {setTodoList} todoList = {todoList} />
        ))}
      </div>
    </div>
  );
}

