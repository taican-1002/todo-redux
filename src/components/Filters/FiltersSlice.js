// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilter":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/priorityFilter":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilter: (state, action) => {
      //mutation: thao tác trực tiếp lên 1 object hoặc array nào đó || Immer
      state.search = action.payload;
    }, //=> {type: 'filters/searchFilter'}
    statusFilter: (state, action) => {
      state.status = action.payload;
    },
    priorityFilter: (state, action) => {
      state.priority = action.payload;
    },
  },
});
