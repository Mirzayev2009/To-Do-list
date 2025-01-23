import { useDraggable } from "@dnd-kit/core";

export default function TaskCard({ todo }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: todo.id, // Correctly use todo.id for draggable items
  });

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
      <h3 className="font-medium text-gray">{todo.title}</h3>
    </div>
  );
}


