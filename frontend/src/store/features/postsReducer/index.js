import { combineReducers } from "@reduxjs/toolkit";

import {filterReducer} from "./filterSlice";
import {formReducer} from "./formSlice";
import {pageReducer} from "./pageSlice";
import {postReducer} from "./postSlice";
import postsSlice from "./postsSlice";

const postsReducer = combineReducers ({
  posts: postsSlice,
  post: postReducer,
  page: pageReducer,
  filter: filterReducer,
  form: formReducer
})

export default postsReducer