// const initState = [
//   {
//     id: 1,
//     name: "Learn Yoga",
//     completed: false,
//     priority: "High",
//   },
//   {
//     id: 2,
//     name: "Learn Redux",
//     completed: true,
//     priority: "Medium",
//   },
//   {
//     id: 3,
//     name: "Learn Javascript",
//     completed: false,
//     priority: "Low",
//   },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

const initState = [
  {
    id: 1,
    name: "Learn Yoga",
    completed: false,
    priority: "High",
  },
  {
    id: 2,
    name: "Learn Redux",
    completed: true,
    priority: "Medium",
  },
  {
    id: 3,
    name: "Learn Javascript",
    completed: false,
    priority: "Low",
  },
];

export const todosSlice = createSlice({
  name: "todoList",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todo", JSON.stringify(state));
    }, //=> action creators
    deleteTodo: (state, action) => {
      const itemRemove = state.filter((item) => item.id !== action.payload);
      return itemRemove;
    },
    deleteAllTodo: (state) => {
      localStorage.removeItem("todo");
      const deleteAll = state.splice(0, state.length);
      return state;
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
