import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './slices/moviesSlice';
import { songsReducer } from './slices/songsSlice';

const store = configureStore({
  reducer: {
    //  reset
    movies: moviesReducer,
    songs: songsReducer,
  },
});

export { store };
