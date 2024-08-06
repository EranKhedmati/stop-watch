import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hour: 0,
    min: 0,
    sec: 0,
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        // Hour Actions
        incrementHour: (state) => {
            state.hour += 1;
        },
        decrementHour: (state) => {
            if (state.hour === 0) {
                return; // do nothing
            } else {
                state.hour -= 1;
            }
        },
        // Min Actions
        incrementMin: (state) => {
            if (state.min === 59) {
                state.min = 0;
                state.hour += 1;
            } else {
                state.min += 1;
            }
        },
        decrementMin: (state) => {
            if (state.min === 0) {
                if (state.hour === 0) {
                    // do nothing
                } else {
                    state.min = 59;
                    state.hour -= 1;
                }
            } else {
                state.min -= 1;
            }
        },
        // Sec Actions
        incrementSec: (state) => {
            if (state.sec === 59) {
                if (state.min === 59) {
                    state.hour += 1;
                    state.min = 0;
                    state.sec = 0;
                } else {
                    state.min += 1;
                    state.sec = 0;
                }
            } else {
                state.sec += 1;
            }
        },
        decrementSec: (state) => {
            if (state.sec === 0) {
                if (state.min === 0) {
                    if (state.hour === 0) {
                        // do nothing
                    } else {
                        state.hour -= 1;
                        state.min = 59;
                        state.sec = 59;
                    }
                } else {
                    state.min -= 1;
                    state.sec = 59;
                }
            } else {
                state.sec -= 1;
            }
        },
    }
})

export const {incrementHour, decrementHour, incrementMin, decrementMin, incrementSec, decrementSec} = timerSlice.actions;

export default timerSlice.reducer;