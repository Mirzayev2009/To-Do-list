import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ToDoList from "./ToDoList";

// Define the schema using Zod
const formSchema = z.object({
  todo: z.string().min(5, "To do must be at least 5 characters."),
});

export function ToDoForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: "",
    },
  });

  const [todoList, setTodoList] = useState([]);

  const onSubmit = (data) => {
    const newTODO = {
      id: Date.now(), // Unique ID for the task
      title: data.todo,
      status: "TODO", // Default status
    };
    setTodoList([...todoList, newTODO]); // Add new todo
    form.reset(); // Reset the form after submission
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white p-6 mt-12 w-96 rounded shadow-md space-y-6"
        >
          <FormField
            control={form.control}
            name="todo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-gray-700">
                  Enter ToDo
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter todo item..."
                    {...field}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 shadow-md"
          >
            Add
          </Button>
        </form>
      </Form>

      {/* Display the todo list */}
      <ToDoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

