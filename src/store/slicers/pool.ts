import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PoolState {
  whichPool: boolean;
  poolCount: number;
  whichGlobalModal: number;
  whichPersonalModal: number;
  functionName: string;
  value: string;
}

const initialState: PoolState = {
  whichPool: false,
  poolCount: 6,
  whichGlobalModal: -1,
  whichPersonalModal: -1,
  functionName: "",
  value: "",
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
    setFunctionName: (state, action: PayloadAction<string>) => {
      state.functionName = action.payload;
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {
  setPoolCount,
  setWhichPool,
  setWhichGlobalModal,
  setWhichPersonalModal,
  setFunctionName,
  setValue,
} = poolSlice.actions;
export default poolSlice.reducer;
