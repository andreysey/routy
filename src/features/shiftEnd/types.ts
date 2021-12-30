import {EventType, ShiftEvents} from "../shiftEvents/types";

export interface ShiftEnd{
    id: string
    type: EventType
    timeEnd?: number | undefined
}
