import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slice";
const TodoItem = () => {
  const data = useSelector((state) => state.todos.data);

  const dispatch = useDispatch();
  return (
    <div className="list_sec">
      {data.map((value, idx) => (
        <>
          <input
           type="text"
           value={value} />
          <input
            type="submit"
            value="Delete"
            id={idx}
            className="delete"
            onClick={(e) => dispatch(deleteTodo(e.target.id))}
          />{" "}
          <input
            type="submit"
            value="Edit"
            id={idx}
            className="edit"
            onClick={(e) => dispatch(updateTodo(e.target.id))}
          />
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default TodoItem;
