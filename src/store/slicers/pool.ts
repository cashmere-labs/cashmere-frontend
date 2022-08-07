import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PoolState {
  whichPool: boolean;
  poolCount: number;
  whichGlobalModal: number;
  whichPersonalModal: number;
}

const initialState: PoolState = {
  whichPool: false,
  poolCount: 6,
  whichGlobalModal: -1,
  whichPersonalModal: -1,
};

export const poolSlice = createSlice({
  name: "pool",
  initialState,
  reducers: {
    setWhichPool: (state, action: PayloadAction<boolean>) => {
      state.whichPool = action.payload;
    },
    setPoolCount: (state, action: PayloadAction<number>) => {
      state.poolCount = action.payload;
    },
    setWhichGlobalModal: (state, action: PayloadAction<number>) => {
      state.whichGlobalModal = action.payload;
    },
    setWhichPersonalModal: (state, action: PayloadAction<number>) => {
      state.whichPersonalModal = action.payload;
    },
  },
});

export const {
  setPoolCount,
  setWhichPool,
  setWhichGlobalModal,
  setWhichPersonalModal,
} = poolSlice.actions;
export default poolSlice.reducer;
