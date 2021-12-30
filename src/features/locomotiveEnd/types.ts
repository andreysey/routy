import {EventType, ShiftEvents} from "../shiftEvents/types";

export interface LocomotiveEnd {
    id: string
    type: EventType
    electricityCounterA?: number | string | undefined
    electricityCounterB?: number | string | undefined
    recuperationCounterA?: number | string | undefined
    recuperationCounterB?: number | string | undefined
}
