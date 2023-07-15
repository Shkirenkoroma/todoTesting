import { configureStore } from '@reduxjs/toolkit'
import { notiesReducer } from './reducers'

export const store = configureStore({
  reducer: {
    tasks: notiesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
