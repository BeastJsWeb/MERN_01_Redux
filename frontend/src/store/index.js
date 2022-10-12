import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './features/postsReducer'
import userReducer from './features/userReducer'

export default configureStore ({
  reducer: {
    user: userReducer,
    posts: postsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})