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

export const {openPost, nullPost} = postSlice.actions

export default postSlice.reducer