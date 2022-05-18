import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priority;
export const searchTextSelector = (state) => state.filters.search;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  searchTextSelector,
  (todoList, status, priority, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status !== "All" && status === "Completed"
          ? todo.completed
          : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
