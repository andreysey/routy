import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from '../../../store';
import {ShiftStart} from "./types";

const initialState: ShiftStart = {
    id: '',
    type: '',
    timeStart: 0,
    route: '',
}

export const shiftStartSlice = createSlice({
    name: 'shiftStart',
    initialState,
    reducers: {
        shiftStartSliceUpdate: (state, action: PayloadAction<ShiftStart>) => {

        },
    },
})

export const {shiftStartSliceUpdate} = shiftStartSlice.actions

export const selectShift = (state: RootState) => state.shiftStart

export default shiftStartSlice.reducer
