import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.favorites = action.payload;
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    addFavorite: (state, action) => {
      if (!Array.isArray(state.favorites)) state.favorites = [];
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (i) => i.id !== action.payload.id
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { setFavorite, addFavorite, deleteFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
