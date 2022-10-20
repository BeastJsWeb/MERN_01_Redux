import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    form: {
      avatar: '',
      name: '',
      email: ''
    }
  },
  reducers: {
    changed(state, action) {
      switch (action.payload.name) {
        case 'avatar':
          state.form.avatar = action.payload.files[0]
          break
        case 'name':
          state.form.name = action.payload.value
          break
        case 'email':
          state.form.email = action.payload.value
          break
        default: break
      }
    }
  }
})

export const {changed} = profileSlice.actions

export default profileSlice.reducer