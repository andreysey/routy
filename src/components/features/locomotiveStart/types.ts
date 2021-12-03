export interface LocomotiveStart {
    id: string
    type: string
    model: string
    number: string
    electricityCounterA: number | string
    electricityCounterB: number | string
    recuperationCounterA: number | string
    recuperationCounterB: number | string
}
