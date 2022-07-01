import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ReservationType = {
  quantity: number;
  books: string[];
};

const initialState = {
  quantity: 0,
  books: [],
} as ReservationType;

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setReservation(state, action: PayloadAction<string>) {
      state.books.push(action.payload);
      state.quantity++;
    },
    clearReservation(state, action: PayloadAction<string>) {
      state.books = state.books.filter(book => book != action.payload);
      state.quantity--;
    },
  },
});

export const { setReservation, clearReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
