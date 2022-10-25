import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { authActions } from "../../store/features/userReducer/authSlice";
import { filterActions } from "../../store/features/postsReducer/filterSlice";
import { postsformActions } from "../../store/features/postsReducer/formSlice";
import { pageActions } from "../../store/features/postsReducer/pageSlice";
import { postActions } from "../../store/features/postsReducer/postSlice";
import { authFormActions } from "../../store/features/userReducer/formSlice";

const actions = {
  ...authActions,
  ...authFormActions,
  ...filterActions,
  ...postsformActions,
  ...pageActions,
  ...postActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}