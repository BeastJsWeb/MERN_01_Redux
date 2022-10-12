import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'userForm',
  initialState: {
    form: {
      username: '', 
      password: '',
      toogled: false
    },
  },
  reducers: {
    createdUser(state) {
      state.form.username = ''
      state.form.password = ''
    },
    setUsername(state, action) {
      state.form.username = action.payload
    },
    setPassword(state, action) {
      state.form.password = action.payload
    },
    toogleForm(state) {
      state.toogled = !state.toogled
    }
  }
})

export const {
  createdUser, setUsername, setPassword, toogleForm
} = formSlice.actions

export default formSlice.reducer