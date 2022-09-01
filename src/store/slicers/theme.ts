import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Theme } from "types/theme";

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggle, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
