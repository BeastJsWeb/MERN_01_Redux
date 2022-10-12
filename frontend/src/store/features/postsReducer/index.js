import { combineReducers } from "@reduxjs/toolkit";

import filterSlice from "./filterSlice";
import formSlice from "./formSlice";
import pageSlice from "./pageSlice";
import postSlice from "./postSlice";
import postsSlice from "./postsSlice";

const postsReducer = combineReducers ({
  posts: postsSlice,
  post: postSlice,
  page: pageSlice,
  filter: filterSlice,
  form: formSlice
})

export default postsReducer