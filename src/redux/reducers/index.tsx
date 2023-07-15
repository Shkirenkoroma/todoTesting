import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITasksState {
  tasks: ITask[]
}

interface ITask {
  id: number
  value: string
}

const initialState: ITasksState = {
  tasks: [],
}

const notiesSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTaskToState: (state, action: PayloadAction<ITask>) => {
      console.log('start action', action)
      state.tasks.push(action.payload)
    },
    deleteTaskFromState: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(
        (item) => item.value !== action.payload,
      )
    },
    saveTaskToState: (state, action: PayloadAction<ITask>) => {
      const { id, value } = action.payload
      state.tasks = state.tasks.map((task) =>
      task.id === id ? { ...task, value: value } : { ...task },
      )
    },
  },
})

export const notiesReducer = notiesSlice.reducer
export const {
  addTaskToState,
  deleteTaskFromState,
  saveTaskToState,
} = notiesSlice.actions
