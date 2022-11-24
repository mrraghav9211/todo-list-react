import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  idx: 0,
  isTrue: false,
  query: "",
};
export const createTodos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      if(action.payload !== ''){
      state.isTrue
        ? (state.data[state.idx] = action.payload)
        : state.data.push(action.payload);
      }else{
        alert("Plz Enter something");
      }
      state.isTrue = false;
      state.query = "";
    },
    deleteTodo: (state, action) => {
      let value = state.data[action.payload];
      state.data = state.data.filter((item) => item !== value);
    },
    updateTodo: (state, action) => {
      state.idx = action.payload;
      state.query = state.data[state.idx];
      state.isTrue = true;
    },
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const { addTodos, deleteTodo, updateTodo, updateQuery } =
  createTodos.actions;
export default createTodos.reducer;
