import {configureStore} from "@reduxjs/toolkit";
import {shiftSlice} from "./components/features/shift/shiftSlice";
import {useDispatch} from "react-redux";
import {eventSlice} from "./components/features/events/eventSlice";


const store = configureStore({
    reducer: {
        shift: shiftSlice.reducer,
        event: eventSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;
