import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RootState} from '../../../store';
import {ShiftList} from "./types";

const initialState: ShiftList[] = []

export const shiftListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<ShiftList>) => {
            state.push(action.payload)
        },
    },
})

export const {addToList} = shiftListSlice.actions

export const selectShift = (state: RootState) => state.shift

export default shiftListSlice.reducer
