import {EventType} from "../shift/types";

export interface LocomotiveEnd {
    id: string
    type: EventType.LocomotiveEnd
    electricityCounterA: number | string
    electricityCounterB: number | string
    recuperationCounterA: number | string
    recuperationCounterB: number | string
}
