import { API } from './../../api/index';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPost, IAuthor } from '../../interfaces';

const setAuthors = createAsyncThunk('authors/fetchAll', async () => {
  try {
    const response = await API.getAuthors();
    return response.data;
  } catch (err) {
    throw err;
  }
});

const setPosts = createAsyncThunk('posts/fetchAll', async () => {
  try {
    const response = await API.getPosts();
    return response.data;
  } catch (err) {
    throw err;
  }
});

export const setData = createAsyncThunk('data/fetchAll', async (_, thunkAPI) => {
  thunkAPI.dispatch(setAuthors());
  thunkAPI.dispatch(setPosts());
});
interface homeState {
  authors: IAuthor[];
  posts: IPost[];
}

const initialState: homeState = {
  authors: [],
  posts: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAuthors.fulfilled, (state, action) => {
      state.authors = action.payload;
    });
    builder.addCase(setPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default homeSlice.reducer;
