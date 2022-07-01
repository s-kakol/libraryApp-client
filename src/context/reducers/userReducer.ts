import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserType = {
  value: string;
};

const initialState = {
  value: '',
} as UserType;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<string>) {
      console.log('sign in');
      console.log(action.payload);
      state.value = action.payload;
    },
    signOut(state, action: PayloadAction<string>) {
      console.log('sign out');
      state.value = '';
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
