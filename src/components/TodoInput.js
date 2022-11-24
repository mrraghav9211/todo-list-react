import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodos, updateQuery } from "../slice";

const TodoInput = () => {
  const query = useSelector((state) => state.todos.query);
  const dispatch = useDispatch();

  return (
    <>
      <div className="input_sec">
        <input
          type="text"
          value={query}
          placeholder="Enter something..."
          onChange={(e) => dispatch(updateQuery(e.target.value))}
        />
        <button onClick={() => dispatch(addTodos(query))}>Add</button>
      </div>
      <br/>
      <TodoItem />
    </>
  );
};

export default TodoInput;
