import {configureStore} from "@reduxjs/toolkit";

import {shiftSlice} from "./features/shiftEvents/shiftSlice";
import {shiftListSlice} from "./features/shiftList/shiftListSlice";
import {shiftStartSlice} from "./features/shiftStart/shiftStartSlice";


const store = configureStore({
    reducer: {
        shiftList: shiftListSlice.reducer,
        shift: shiftSlice.reducer,
        shiftStart: shiftStartSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
