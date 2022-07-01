import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserType = {
  isLoggedIn: boolean;
  token: string;
  userName: string;
  userId: string;
};

const initialState = {
  isLoggedIn: false,
  token: '',
  userName: '',
  userId: '',
} as UserType;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<UserType>) {
      state = action.payload;
    },
    signOut(state, action: PayloadAction<UserType>) {
      state = initialState;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
