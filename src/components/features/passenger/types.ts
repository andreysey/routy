import {EventType} from "../shift/types";

export interface Passenger {
    id: string
    type: EventType.passenger
    trainNumber: string
    timeStart: number
    timeEnd: number
    stationStart: string
    stationEnd: string
}
