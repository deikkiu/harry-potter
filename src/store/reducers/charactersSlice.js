import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [],
  isLoading: false,
  error: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
});

export default charactersSlice.reducer;
