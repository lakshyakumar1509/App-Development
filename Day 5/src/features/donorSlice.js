import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '', // Initialize with an empty string
  };
  
const donorsSlice = createSlice({
  name: 'donors',
  initialState: initialState,
  reducers: {
    addDonor: (state, action) => {
      state.push(action.payload);
    },
    deleteDonor: (state, action) => {
      return state.filter((donor) => donor.id !== action.payload.id);
    },
    setEmail: (state, action) => {
        state.email = action.payload;
      },
  },
});

export const { addDonor, deleteDonor, setEmail } = donorsSlice.actions;
export default donorsSlice.reducer;