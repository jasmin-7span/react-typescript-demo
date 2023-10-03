import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user'

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
})

export default store
