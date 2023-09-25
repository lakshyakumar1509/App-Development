import { configureStore } from '@reduxjs/toolkit';
import donorsReducer from '../features/donorSlice';
export const store = configureStore({
  reducer: {
    donor: donorsReducer,
  },
});

export default store;