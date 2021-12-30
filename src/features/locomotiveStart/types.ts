import {EventType, ShiftEvents} from "../shiftEvents/types";

export interface LocomotiveStart {
    id: string
    type: EventType
    model?: string | undefined
    number?: string | undefined
    electricityCounterA?: number | string | undefined
    electricityCounterB?: number | string | undefined
    recuperationCounterA?: number | string | undefined
    recuperationCounterB?: number | string | undefined
}
