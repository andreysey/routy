import {EventType, ShiftEvents} from "../shift/types";

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
