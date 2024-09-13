import { useTodoStore } from "../../store/todoStore";

const TodoList = () => {
  const todoList = useTodoStore((state) => state.todo);
  console.log(todoList);
  const addTodo = useTodoStore((state) => state.addTodo);
  const todo = {
    name: "example todo",
  };
  return (
    <div>
      <button onClick={() => addTodo(todo)} className="btn btn-primary">
        Add Todo
      </button>
      {todoList?.map((todo, i) => (
        <div className="card" key={i}>
          <p>{todo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
