import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/imageSlice';

export const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
