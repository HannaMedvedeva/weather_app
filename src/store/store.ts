import { configureStore } from '@reduxjs/toolkit';
import {weatherSlice} from './weatherSlice/weatherSlice';
import {filterSlice} from "./filterSlice/filterSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    weather: weatherSlice.reducer,
    filters: filterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
