import { createReducer } from "@reduxjs/toolkit";
import { addAllUsers } from "./usersActions";
export const userReducer = createReducer(["asc"], {
  [addAllUsers]: (_, { payload }) => payload
});
