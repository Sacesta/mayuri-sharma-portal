import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginService, LoginPayload, User } from "@/services/auth.services";

type UserState = {
  isLoggedIn: boolean;
  user: User | {};
  showLoginModal: boolean;
};

const initialState: UserState = {
  isLoggedIn: false,
  user: {},
  showLoginModal: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.user = {};
      state.isLoggedIn = false;
      state.showLoginModal = false;
    },

    setLoginModal: (state, action: PayloadAction<boolean>) => {
      state.showLoginModal = action.payload;
    },
  },
});
export const { setUser, clearUser, setLoginModal } = user.actions;
export default user.reducer;

export const getUser = (state: any) => state.userState.user;
export const getLoggedIn = (state: any) => state.userState.isLoggedIn;
export const getShowModal = (state: any) => state.userState.showLoginModal;
