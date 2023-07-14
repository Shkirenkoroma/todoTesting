import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NotiesState = {
  noties: Note[]
}

export interface IPropsMapping {
  id: number
  value: string
}

export type Note = {
  id: number
  value: string
}

const initialState: NotiesState = {
  noties: [],
};

const notiesSlice = createSlice({
  name: 'noties',
  initialState,
  reducers: {
    getNoties: (state, action: PayloadAction<Note>) => {
      state.noties.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.noties = state.noties.filter(
        (item: IPropsMapping) => item.value !== action.payload,
      );
    },
    saveNoties: (state, action: PayloadAction<Note>) => {
      const { id, value } = action.payload;
      state.noties = state.noties.map((el) =>
        el.id === id ? { ...el, value: value } : { ...el },
      );
    },
  },
});

export const notiesReducer = notiesSlice.reducer;
export const { getNoties, deleteNote, saveNoties } = notiesSlice.actions;
