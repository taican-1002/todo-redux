import { combineReducers } from "redux";

import { filtersSlice } from "../components/Filters/FiltersSlice";
import { todosSlice } from "../components/TodoList/TodosSlice";

const rootReducer = combineReducers({
  filters: filtersSlice,
  todoList: todosSlice,
});

export default rootReducer;
