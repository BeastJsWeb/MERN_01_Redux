import { combineReducers } from "@reduxjs/toolkit";

import {authReducer} from "./authSlice";
import {formReducer} from "./formSlice";
import profileSlice from "./profileSlice";

const userReducer = combineReducers ({
  auth: authReducer,
  form: formReducer,
  profile: profileSlice
})

export default userReducer