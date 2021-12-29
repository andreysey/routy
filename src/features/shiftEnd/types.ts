import {EventType, ShiftEvents} from "../shift/types";

export interface ShiftEnd{
    id: string
    type: EventType
    timeEnd?: number | undefined
}
