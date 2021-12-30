import {EventType, ShiftEvents} from "../shiftEvents/types";

export interface ShiftStart {
    id: string
    type: EventType
    timeStart?: number | undefined
    route?: string | undefined
}

// id: string
// type: EventType.ShiftStart
// timeStart: number
// route: string
