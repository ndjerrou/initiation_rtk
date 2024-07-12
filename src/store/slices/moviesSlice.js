import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const idx = state.indexOf(action.payload.title);
      state.splice(idx, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

// console.log(moviesSlice.actions.reset.toString());

export const { addMovie, removeMovie } = moviesSlice.actions; // action creators
export const moviesReducer = moviesSlice.reducer;
