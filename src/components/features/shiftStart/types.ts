import {EventType} from "../shift/types";

export interface ShiftStart {
    id: string
    type: EventType.shiftStart
    timeStart: number
    route: string
}
