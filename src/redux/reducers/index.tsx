import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask, ITasksState } from './index.types';

const initialState: ITasksState = {
  tasks: [],
};

const notiesSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.value !== action.payload)
    },
    saveTask: (state, action: PayloadAction<ITask>) => {
      const { id, value } = action.payload
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, value: value } : { ...task },
      )
    },
  },
});

export const notiesReducer = notiesSlice.reducer;
export const { addTask, deleteTask, saveTask } = notiesSlice.actions;
