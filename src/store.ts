import {configureStore} from "@reduxjs/toolkit";

import {shiftSlice} from "./components/features/shift/shiftSlice";
import {shiftListSlice} from "./components/features/shiftList/shiftListSlice";
import {shiftStartSlice} from "./components/features/shiftStart/shiftStartSlice";


const store = configureStore({
    reducer: {
        shiftList: shiftListSlice.reducer,
        shift: shiftSlice.reducer,
        shiftStart: shiftStartSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
