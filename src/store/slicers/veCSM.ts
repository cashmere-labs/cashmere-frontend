import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface VeCSMState {
  isActive: boolean;
  validatorCount: number;
}

const initialState: VeCSMState = {
  isActive: false,
  validatorCount: 6,
};

export const veCSMSlice = createSlice({
  name: "veCSM",
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
    setValidatorCount: (state, action: PayloadAction<number>) => {
      state.validatorCount = action.payload;
    },
  },
});

export const { setIsActive, setValidatorCount } = veCSMSlice.actions;
export default veCSMSlice.reducer;
