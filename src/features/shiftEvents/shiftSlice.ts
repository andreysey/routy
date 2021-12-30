import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from '../../store';
import {Shift, ShiftEvents} from "./types";
import {ShiftStart} from "../shiftStart/types";
import {Passenger} from "../passenger/types";
import {Train} from "../train/types";
import {LocomotiveStart} from "../locomotiveStart/types";
import {LocomotiveEnd} from "../locomotiveEnd/types";
import {ShiftEnd} from "../shiftEnd/types";


const initialState: Shift = {
    id: '',
    timeStart: 0,
    timeEnd: 0,
    events: [],
    completed: false,
}

export const shiftSlice = createSlice({
    name: 'shift',
    initialState,
    reducers: {
    addShiftStartEvent: (state, action: PayloadAction<ShiftStart>) => {
        state.events.push(action.payload)
        state.id = nanoid()
        state.timeStart = action.payload.timeStart
    },
        addPassengerEvent: (state, action: PayloadAction<Passenger>) => {
        state.events.push(action.payload)
    },
        addTrainEvent: (state, action: PayloadAction<Train>) => {
        state.events.push(action.payload)
    },
        addLocomotiveStartEvent: (state, action: PayloadAction<LocomotiveStart>) => {
        state.events.push(action.payload)
    },
        addLocomotiveEndEvent: (state, action: PayloadAction<LocomotiveEnd>) => {
        state.events.push(action.payload)
    },
        addShiftEndEvent: (state, action: PayloadAction<ShiftEnd>) => {
        state.events.push(action.payload)
        state.timeEnd = action.payload.timeEnd
    },
        resetShiftState: () => initialState
},
})

export const {
    addShiftStartEvent,
    addPassengerEvent,
    addTrainEvent,
    addLocomotiveStartEvent,
    addLocomotiveEndEvent,
    addShiftEndEvent,
    resetShiftState
} = shiftSlice.actions

export const selectShift = (state: RootState) => state.shift

export default shiftSlice.reducer

// reducers: {
//     addShiftStartEvent: (state, action: PayloadAction<ShiftStart>) => {
//         state.events.push(action.payload)
//         state.id = nanoid()
//         state.timeStart = action.payload.timeStart
//     },
//         addPassengerEvent: (state, action: PayloadAction<Passenger>) => {
//         state.events.push(action.payload)
//     },
//         addTrainEvent: (state, action: PayloadAction<Train>) => {
//         state.events.push(action.payload)
//     },
//         addLocomotiveStartEvent: (state, action: PayloadAction<LocomotiveStart>) => {
//         state.events.push(action.payload)
//     },
//         addLocomotiveEndEvent: (state, action: PayloadAction<LocomotiveEnd>) => {
//         state.events.push(action.payload)
//     },
//         addShiftEndEvent: (state, action: PayloadAction<ShiftEnd>) => {
//         state.events.push(action.payload)
//         state.timeEnd = action.payload.timeEnd
//     },
//         resetShiftState: () => initialState
// },
