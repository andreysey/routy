import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from '../../../store';
import {Shift} from "./types";
import {ShiftStart} from "../shiftStart/types";


const initialState: Shift = {
    id: '',
    timeStart: 0,
    timeEnd: 0,
    events: [],
    lastEvent: '',
    completed: false,
}

export const shiftSlice = createSlice({
    name: 'shift',
    initialState,
    reducers: {
        startShift: (state, action: PayloadAction<number>) => {
            state.id = nanoid();
            state.timeStart = action.payload;
        },
        updateEnd: (state, action: PayloadAction<Shift>) => {
            // state.sfs.shiftStart.time = action.payload
        },
        addShiftStartEvent: (state, action: PayloadAction<ShiftStart>) => {
            state.id = action.payload.id
            state.timeStart = action.payload.timeStart
            state.lastEvent = action.payload.type
            state.events.push(action.payload)
        },
    },
})

export const {startShift, updateEnd, addShiftStartEvent} = shiftSlice.actions

export const selectShift = (state: RootState) => state.shift

export default shiftSlice.reducer
