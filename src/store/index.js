import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload.title);
    },
    removeMovie(state, action) {
      const idx = state.indexOf(action.payload.title);
      state.splice(idx, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

console.log(store.getState());

store.dispatch({ type: 'movie/addMovie', payload: { title: 'A new movie' } });

console.log(store.getState());

store.dispatch({
  type: 'movie/addMovie',
  payload: { title: 'An other movie' },
});

store.dispatch({
  type: 'movie/addMovie',
  payload: { title: 'Scream' },
});

console.log(store.getState());

store.dispatch({
  type: 'movie/removeMovie',
  payload: { title: 'A new movie' },
});

console.log('After removing = ', store.getState());

export { store };
