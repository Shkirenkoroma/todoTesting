import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface INotiesState {
  noties: INote[]
}

interface IPropsMapping {
  id: number
  value: string
}

interface INote {
  id: number
  value: string
}

const initialState: INotiesState = {
  noties: [],
}

const notiesSlice = createSlice({
  name: 'noties',
  initialState,
  reducers: {
    getNoties: (state, action: PayloadAction<INote>) => {
      state.noties.push(action.payload)
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.noties = state.noties.filter(
        (item: IPropsMapping) => item.value !== action.payload,
      )
    },
    saveNoties: (state, action: PayloadAction<INote>) => {
      const { id, value } = action.payload
      state.noties = state.noties.map((el) =>
        el.id === id ? { ...el, value: value } : { ...el },
      )
    },
  },
})

export const notiesReducer = notiesSlice.reducer
export const {
  getNoties,
  deleteNote,
  saveNoties,
} = notiesSlice.actions
