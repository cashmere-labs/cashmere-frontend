import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NetworkTypes } from "ui/NetworkBadge/utils";

export interface NetworkState {
  network: NetworkTypes | string;
}

const initialState: NetworkState = {
  network: NetworkTypes.AVALANCE,
};

export const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    setNetwork: (state, action: PayloadAction<NetworkTypes | string>) => {
      state.network = action.payload;
    },
  },
});

export const { setNetwork } = networkSlice.actions;
export default networkSlice.reducer;
