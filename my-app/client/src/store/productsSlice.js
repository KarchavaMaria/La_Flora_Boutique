import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../api/config';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/products`);
      console.log("SERVER RESPONSE:", response.data);
      console.log("API_URL:", process.env.REACT_APP_API_URL);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/products/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/products/category/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    all: {
      items: [],
      status: 'idle',
      error: null,
    },
    selected: {
      item: null,
      status: 'idle',
      error: null,
    },
    filtered: {
      itemsByCategory: {},
      statusByCategory: {},
      errorByCategory: {},
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.all.status = 'loading';
      })

      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.all.status = 'succeeded';
        state.all.items = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.all.status = 'failed';
        state.all.error = action.payload || action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.selected.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selected.status = 'succeeded';
        state.selected.item = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.selected.status = 'failed';
        state.selected.error = action.payload || action.error.message;
      })
      .addCase(fetchProductsByCategory.pending, (state, action) => {
        const categoryId = action.meta.arg;
        state.filtered.statusByCategory[categoryId] = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        const categoryId = action.meta.arg;
        state.filtered.statusByCategory[categoryId] = 'succeeded';
        state.filtered.itemsByCategory[categoryId] = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        const categoryId = action.meta.arg;
        state.filtered.statusByCategory[categoryId] = 'failed';
        state.filtered.errorByCategory[categoryId] =
          action.payload || action.error.message;
      });
  },
});

export default productsSlice.reducer;
