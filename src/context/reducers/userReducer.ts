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
      const { isLoggedIn, token, userName, userId } = { ...action.payload };
      state.isLoggedIn = isLoggedIn;
      state.token = token;
      state.userName = userName;
      state.userId = userId;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.token = '';
      state.userName = '';
      state.userId = '';
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
