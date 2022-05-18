/**REDUX */
// import { createStore } from "redux";
// import rootReducer from "./reducer";

// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools(); //Để sd redux devtools extension trên Chrome

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

/**REDUX TOOLKIT */
import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../components/Filters/FiltersSlice";
import { todosSlice } from "../components/TodoList/TodosSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;
