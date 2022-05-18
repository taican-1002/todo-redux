export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: "todoList/deleteTodo",
    payload: data,
  };
};

export const deleteAllTodo = (data) => {
  return {
    type: "todoList/deleteAllTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilter = (text) => {
  return {
    type: "filters/searchFilter",
    payload: text,
  };
};

export const statusFilter = (status) => {
  return {
    type: "filters/statusFilter",
    payload: status,
  };
};

export const priorityFilter = (priority) => {
  return {
    type: "filters/priorityFilter",
    payload: priority,
  };
};

//action creators => function

//Hướng đi:
/**
 * Action ->
 * Reducer ->
 * View
 */
