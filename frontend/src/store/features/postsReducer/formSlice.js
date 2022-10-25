import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'postForm',
  initialState: {
    form: {
      title: '', 
      content: '', 
      picture: ''
    }
  },
  reducers: {
    createdPost (state) {
      state.form.title = ''
      state.form.content = ''
      state.form.picture = ''
    },
    postsFormChanged (state, action) {
      switch (action.payload.id) {
        case 'Title':
          state.form.title = action.payload.value
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

export const postsformActions = formSlice.actions

export const formReducer = formSlice.reducer