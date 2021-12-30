import {ShiftStart} from "../shiftStart/types";
import {Passenger} from "../passenger/types";
import {Train} from "../train/types";
import {LocomotiveStart} from "../locomotiveStart/types";
import {LocomotiveEnd} from "../locomotiveEnd/types";
import {ShiftEnd} from "../shiftEnd/types";

export interface Shift {
    id: string
    timeStart: number | undefined
    timeEnd: number | undefined
    events: Array<ShiftEvents>
    completed: boolean
}

export enum EventType {
    ShiftStart = 'Явка',
    Passenger = 'Пассажиром',
    LocomotiveStart = 'Приемка',
    Train = 'Поезд',
    LocomotiveEnd = 'Сдача',
    ShiftEnd = 'Конец смены',
    Blank = ''
}

// events: Array<ShiftStart | Passenger | Train | LocomotiveStart | LocomotiveEnd | ShiftEnd>

// Array<ShiftEvents>

export interface ShiftEvents extends ShiftStart, Passenger, Train, LocomotiveStart, LocomotiveEnd, ShiftEnd {

}
