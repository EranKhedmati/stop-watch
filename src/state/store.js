import { configureStore } from "@reduxjs/toolkit";

// Slices
import timerReducer from "./slices/timerSlice"

export const store = configureStore({
    reducer: {
        timer: timerReducer,
    }
});