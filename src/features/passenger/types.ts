import {EventType, ShiftEvents} from "../shiftEvents/types";

export interface Passenger {
    id: string
    type: EventType
    trainNumber?: string | undefined
    timeStart?: number | undefined
    timeEnd?: number | undefined
    stationStart?: string | undefined
    stationEnd?: string | undefined
}
