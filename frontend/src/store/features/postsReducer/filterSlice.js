import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      by: '',
      sort: '',
      query: ''
    }
  },
  reducers: {
    filterChanged(state, action) {
      switch (action.payload.name) {
        case 'sort':
          state.filter.sort = action.payload.value
          break
        case 'query':
          state.filter.query = action.payload.value
          break
        case 'by':
          state.filter.by = action.payload.value
          break
        default: break
      }
    }
  }
})

export const filterActions = filterSlice.actions

export const filterReducer = filterSlice.reducer