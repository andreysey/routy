import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from '../../store';
import {ShiftList} from "./types";
import {Shift} from "../shift/types";

const initialState: ShiftList = []

export const shiftListSlice = createSlice({
    name: 'shiftList',
    initialState,
    reducers: {
        addToShiftList: (state, action: PayloadAction<Shift>) => {
            state.push(action.payload)
        },
    },
})

export const {addToShiftList} = shiftListSlice.actions

export const selectShift = (state: RootState) => state.shiftList

export default shiftListSlice.reducer
