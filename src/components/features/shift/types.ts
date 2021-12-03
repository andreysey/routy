import {ShiftStart} from "../shiftStart/types";
import {Passenger} from "../passenger/types";
import {Train} from "../train/types";
import {LocomotiveStart} from "../locomotiveStart/types";
import {LocomotiveEnd} from "../locomotiveEnd/types";
import {ShiftEnd} from "../shiftEnd/types";

export interface Shift {
    id: string
    timeStart: number
    timeEnd: number
    events: Array<ShiftStart | Passenger | Train | LocomotiveStart | LocomotiveEnd | ShiftEnd>
    completed: boolean
}

export enum EventType {
    shiftStart = 'Явка',
    passenger = 'Пассажиром',
    locomotiveStart = 'Приемка',
    train = 'Поезд',
    locomotiveEnd = 'Сдача',
    shiftEnd = 'Конец смены',
    blank = ''
}
