import {EventType} from "../shift/types";

export interface Passenger {
    id: string
    type: EventType.Passenger
    trainNumber: string
    timeStart: number
    timeEnd: number
    stationStart: string
    stationEnd: string
}
