import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'postForm',
  initialState: {
    form: {
      title: '', 
      author: '', 
      content: '', 
      picture: ''
    }
  },
  reducers: {
    createdPost (state) {
      state.form.title = ''
      state.form.author = ''
      state.form.content = ''
      state.form.picture = ''
    },
    changed (state, action) {
      switch (action.payload.id) {
        case 'Title':
          state.form.title = action.payload.value
          break
        case 'Author':
          state.form.author = action.payload.value
          break
        case 'Content':
          state.form.content = action.payload.value
          break
        case 'Picture':
          state.form.picture = action.payload.files[0]
          break
        default: break
      }
    }
  }
})

export const {createdPost, changed} = formSlice.actions

export default formSlice.reducer