import {EventType} from "../shift/types";

export interface LocomotiveStart {
    id: string
    type: EventType.LocomotiveStart
    model: string
    number: string
    electricityCounterA: number | string
    electricityCounterB: number | string
    recuperationCounterA: number | string
    recuperationCounterB: number | string
}
