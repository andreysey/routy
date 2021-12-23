import {EventType} from "../shift/types";

export interface Train {
    id: string
    type: EventType.Train
    trainNumber: string
    timeStart: number
    timeEnd: number
    stationStart: string
    stationEnd: string
}
