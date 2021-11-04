import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../store";


interface EventSlice {
    id: string,
    title: string,
    info: string | Date | null | number
}

const initialState: EventSlice[] = [

]

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent: (state, action: PayloadAction<EventSlice>) => {
            state.push(action.payload)
        }
    }
})

export const {addEvent} = eventSlice.actions

export const selectEvent = (state: RootState) => state.event

export default eventSlice.reducer
