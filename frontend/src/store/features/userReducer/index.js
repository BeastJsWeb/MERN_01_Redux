import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import formSlice from "./formSlice";
import profileSlice from "./profileSlice";

const userReducer = combineReducers ({
  auth: authSlice,
  form: formSlice,
  profile: profileSlice
})

export default userReducer