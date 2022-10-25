import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: '',
  },
  reducers: {
    openPost(state, action) {
      const {currentPage, e} = action.payload
      state.post = currentPage.find(post => post._id === e.currentTarget.id)
      
    },
    nullPost(state) {
      state.post = ''
    }
  }
})

export const postActions = postSlice.actions

export const postReducer = postSlice.reducer