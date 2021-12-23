import {EventType} from "../shift/types";

export interface ShiftEnd {
    id: string
    type: EventType.ShiftEnd
    timeEnd: number
}
