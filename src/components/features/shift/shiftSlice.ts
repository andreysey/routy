import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "../../../store";

export interface Shift {
    id: number
    shiftStart: number | Date | null,
    shiftEnd: number | Date | null,
    events: [],
    completed: boolean,
}


const initialState: Shift[] = [
    {
        id: 0,
        shiftStart: 213123123,
        shiftEnd: 23123131,
        events: [],
        completed: true,
    },
    {
        id: 1,
        shiftStart: 12313123,
        shiftEnd: 1231312313,
        events: [],
        completed: true,
    }
];

export const shiftSlice = createSlice({
    name: 'shifts',
    initialState,
    reducers: {
        addShift: (state, action: PayloadAction<Shift>) => {
            state.push(action.payload)
        },
        updateStart: (state, action: PayloadAction<Shift>) => {
            // state.shift.shiftStart.time =
        },
        updateEnd: (state, action: PayloadAction<Shift>) => {
            // state.sfs.shiftStart.time = action.payload
        },
    },
})

export const {addShift, updateStart, updateEnd} = shiftSlice.actions

export const selectShift = (state: RootState) => state.shift

export default shiftSlice.reducer
