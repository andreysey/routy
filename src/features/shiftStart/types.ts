import {EventType} from "../shift/types";

export interface ShiftStart {
    id: string
    type: EventType.ShiftStart
    timeStart: number
    route: string
}
