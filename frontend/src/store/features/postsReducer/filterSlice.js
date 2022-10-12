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
    changed(state, action) {
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

export const {changed} = filterSlice.actions

export default filterSlice.reducer