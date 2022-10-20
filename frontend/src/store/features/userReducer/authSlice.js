import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../API/services/authService";
import { createdUser } from "./formSlice";

export const auth = createAsyncThunk(
  'auth/auth',
  async (_, {rejectWithValue}) => {
    try {
      const logged = await authService.auth()
      return logged
    } catch (e) {
      console.log(e)
      return rejectWithValue(e.response.data)
    }
  }
)

export const registration = createAsyncThunk(
  'auth/registration',
  async (form, {rejectWithValue, dispatch}) => {
    try {
      const created = await authService.registration(form)
      dispatch(createdUser())
      return created.message
    } catch (e) {
      console.log(e)
      return rejectWithValue(e.response.data)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (form, {rejectWithValue, dispatch}) => {
    try {
      const logged = await authService.login(form)
      dispatch(createdUser())
      return logged
    } catch (e) {
      console.log(e)
      return rejectWithValue(e.response.data)
    }
  }
)

const setLoading = (state) => {
  state.status = 'loading'
  state.error = null
}

const resolved = (state, action) => {
  state.status = 'resolved'
  state.loggedIn = true
  state.username = action.payload.username
  localStorage.setItem('token', action.payload.token)
}

const setError = (state, action) => {
  const {message, errors} = action.payload
  const err = errors?.errors.map(({msg}) => msg)
  state.status = 'rejected'
  state.error = err ? [message,...err] : [message]
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    created: '',
    loggedIn: false,
    status: null,
    error: null,
  },
  reducers: {
    logout(state) {
      state.loggedIn = false
      localStorage.removeItem('token')
    }
  },
  extraReducers: {
    [auth.pending]: setLoading,
    [login.pending]: setLoading,
    [registration.pending]: setLoading,

    [auth.fulfilled]: resolved,
    [login.fulfilled]: resolved,
    [registration.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.created = action.payload
    },

    [auth.rejected]: (state) => {
      state.status = 'rejected'
      localStorage.removeItem('token')
    },
    [login.rejected]: setError,
    [registration.rejected]: setError,
  }
})

export const {logout} = authSlice.actions

export default authSlice.reducer