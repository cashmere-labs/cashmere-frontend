import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import themeSlice from "store/slicers/theme";
import poolSlice from "store/slicers/pool";
import veCSMSlice from "store/slicers/veCSM";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    pool: poolSlice,
    veCSM: veCSMSlice,
  },
  middleware: (getDefaultMiddleware) => {
    const customizedMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });
    return customizedMiddleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
