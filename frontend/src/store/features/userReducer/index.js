import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import formSlice from "./formSlice";

const userReducer = combineReducers ({
  auth: authSlice,
  form: formSlice
})

export default userReducer