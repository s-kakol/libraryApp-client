import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BookDetails = {
  id: string;
  title: string;
  author: string;
};

type ReservationType = {
  quantity: number;
  books: BookDetails[];
  isOpen: boolean;
};

const initialState = {
  quantity: 0,
  books: [],
  isOpen: false,
} as ReservationType;

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setReservation(state, action: PayloadAction<BookDetails>) {
      state.books.push(action.payload);
      state.quantity++;
    },
    clearReservation(state, action: PayloadAction<string>) {
      state.books = state.books.filter(book => book.id != action.payload);
      state.quantity--;
    },
    toggleReservation(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setReservation, clearReservation, toggleReservation } =
  reservationSlice.actions;
export default reservationSlice.reducer;
