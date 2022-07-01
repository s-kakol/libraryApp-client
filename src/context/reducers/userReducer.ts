import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserType = {
  isLoggedIn: boolean;
  token: string;
  userName: string;
  userId: string;
};

const initialState = {
  isLoggedIn: Boolean(window.localStorage.getItem('libUserIsLogged')),
  token: window.localStorage.getItem('libUserToken'),
  userName: window.localStorage.getItem('libUserName'),
  userId: window.localStorage.getItem('libUserId'),
} as UserType;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<UserType>) {
      const { isLoggedIn, token, userName, userId } = { ...action.payload };
      window.localStorage.setItem('libUserIsLogged', String(isLoggedIn));
      window.localStorage.setItem('libUserToken', token);
      window.localStorage.setItem('libUserName', userName);
      window.localStorage.setItem('libUserId', userId);
      state.isLoggedIn = isLoggedIn;
      state.token = token;
      state.userName = userName;
      state.userId = userId;
    },
    signOut(state) {
      window.localStorage.removeItem('libUserIsLogged');
      window.localStorage.removeItem('libUserToken');
      window.localStorage.removeItem('libUserName');
      window.localStorage.removeItem('libUserId');
      state.isLoggedIn = Boolean(
        window.localStorage.getItem('libUserIsLogged')
      );
      state.token = window.localStorage.getItem('libUserToken') || '';
      state.userName = window.localStorage.getItem('libUserName') || '';
      state.userId = window.localStorage.getItem('libUserId') || '';
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
