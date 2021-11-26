import {ShiftStart} from "../shiftStart/types";

export interface Shift {
    id: string
    timeStart: number
    timeEnd: number
    events: Array<ShiftStart>
    lastEvent: string
    completed: boolean
}
