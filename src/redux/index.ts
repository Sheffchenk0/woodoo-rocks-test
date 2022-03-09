import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './reducers';
// ...
const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
