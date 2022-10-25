import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    page: {
      number: 1,
      limit: 10,
      pagination: []
    },
  },
  reducers: {
    changePage(state, action) {
      state.page.number = action.payload
    },
    nullPage(state) {
      state.page.number = 1
    },
    sortPage(state, action) {
      state.page.limit = action.payload
    },
    setPagination(state, action) {
      action.payload > 0
      ? state.pagination = [...Array(action.payload).keys()].map(i => i + 1)
      : state.pagination = []
    }
  }
})

export const pageActions = pageSlice.actions

export const pageReducer = pageSlice.reducer