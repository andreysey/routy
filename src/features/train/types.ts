import {EventType, ShiftEvents} from "../shift/types";

export interface Train{
    id: string
    type: EventType
    trainNumber?: string | undefined
    timeStart?: number | undefined
    timeEnd?: number | undefined
    stationStart?: string | undefined
    stationEnd?: string | undefined
}
