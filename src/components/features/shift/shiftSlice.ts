import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from "../../../store";

interface Shift {
    id?: number,
    shiftStart?: string | number,
    routeNumber?: string | number,
    shiftEnd?: number,
    events?: [],
    completed?: boolean,
}

const initialState: Shift[] = [
    // {
    //     id: 0,
    //     shiftStart: 213123123,
    //     routeNumber: 123,
    //     shiftEnd: 23123131,
    //     events: [],
    //     completed: true,
    // },
    // {
    //     id: 1,
    //     shiftStart: 12313123,
    //     routeNumber: 321,
    //     shiftEnd: 1231312313,
    //     events: [],
    //     completed: true,
    // }
];

export const shiftSlice = createSlice({
    name: 'shifts',
    initialState,
    reducers: {
        addShift: (state, action: PayloadAction<Shift>) => {
            state.push(action.payload)
        },
        updateStartShift: (state, {payload}: PayloadAction) => {

        }
        ,
        updateEnd: (state, action: PayloadAction<Shift>) => {
            // state.sfs.shiftStart.time = action.payload
        },
    },
})

export const {addShift, updateStartShift, updateEnd} = shiftSlice.actions

export const selectShift = (state: RootState) => state.shift

export default shiftSlice.reducer
