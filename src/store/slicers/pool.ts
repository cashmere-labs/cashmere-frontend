import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PoolState {
  whichPool: boolean;
  poolCount: number;
}

const initialState: PoolState = {
  whichPool: false,
  poolCount: 6,
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
  },
});

export const { setPoolCount, setWhichPool } = poolSlice.actions;
export default poolSlice.reducer;
