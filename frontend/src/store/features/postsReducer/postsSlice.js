import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import postService from '../../../API/services/postService'
import { nullPost } from './postSlice'
import { createdPost } from './formSlice'

export const fetch = createAsyncThunk(
  'posts/fetch',
  async (_, {rejectWithValue}) => {
    try {
      return await postService.getAll()
    } catch (e) {
      console.log(e)
      return rejectWithValue(e.message)
    }
  }
)

export const remove = createAsyncThunk(
  'posts/remove',
  async (id, {rejectWithValue, dispatch}) => {
    try {
      await postService.delete(id)
      dispatch(nullPost())
      return id
    } catch (e) {
      console.log(e)
      return rejectWithValue(e.message)
    }
  }
)

export const create = createAsyncThunk(
  'posts/create',
  async (form, {rejectWithValue, dispatch}) => {
    try {
      const created = await postService.create(form)
      const newPost = {
        ...form, 
        _id: created._id,
        picture: created.picture
      }
      dispatch(createdPost())
      return newPost
    } catch (e) {
      console.log(e)
      return rejectWithValue(e.message)
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: {
      fetch: null,
      remove: null,
      create: null
    },
    error: null
  },
  extraReducers: {
    [fetch.pending]: state => {
      state.status.fetch = 'loading'
      state.error = null
    },
    [remove.pending]: state => {
      state.status.remove = 'loading'
      state.error = null
    },
    [create.pending]: state => {
      state.status.create = 'loading'
      state.error = null
    },

    [fetch.fulfilled]: (state, action) => {
      state.status.fetch = 'resolved'
      state.posts = action.payload
    },
    [remove.fulfilled]: (state, action) => {
      state.status.remove = 'resolved'
      state.posts = state.posts.filter(p => p._id !== action.payload)
    },
    [create.fulfilled]: (state, action) => {
      state.status.create = 'resolved'
      state.posts.push(action.payload)
    },

    [fetch.rejected]: (state, action) => {
      state.status.fetch = 'rejected'
      state.error = action.payload
    },
    [remove.rejected]: (state, action) => {
      state.status.remove = 'rejected'
      state.error = action.payload
    },
    [create.rejected]: (state, action) => {
      state.status.create = 'rejected'
      state.error = action.payload
    },
  }
})

export default postsSlice.reducer