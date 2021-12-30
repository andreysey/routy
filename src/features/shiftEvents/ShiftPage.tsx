import React from "react";
import ShiftEventCard from './ShiftEventCard';
import TextButton from "../../components/TextButton";
import {
    DirectionsRailwayRounded,
    DirectionsRunRounded,
    EmojiPeopleRounded,
    LocalBarRounded,
    TrainRounded
} from "@mui/icons-material";
import TextButtonBack from "../../components/TextButtonBack";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {EventType, ShiftEvents} from "./types";
import {addToShiftList} from "../shiftList/shiftListSlice";
import {resetShiftState} from "./shiftSlice";
import {UrlPath} from "../../App";
import ShiftStartCard from "../shiftStart/ShiftStartCard";
import ShiftEndCard from "../shiftEnd/ShiftEndCard";
import LocomotiveStartCard from '../locomotiveStart/LocomotiveStartCard';
import LocomotiveEndCard from "../locomotiveEnd/LocomotiveEndCard";
import PassengerCard from "../passenger/PassengerCard";
import TrainCard from "../train/TrainCard";


export default function ShiftPage() {

    const events = useAppSelector(state => state.shift.events);
    const shift = useAppSelector(state => state.shift);
    const lastEventType = events[events.length - 1]?.type || EventType.Blank;
    const dispatch = useAppDispatch();

    const addToShiftListHandler = () => {
        if (lastEventType === EventType.ShiftEnd) {
            dispatch(addToShiftList({...shift}));
            dispatch(resetShiftState());
        }
    };

    const showButtonHelper = (lastEvent: string) => {

        const end = (<TextButton name={'Конец смены'} to={UrlPath.ShiftEnd} startIcon={<LocalBarRounded/>}/>);
        const startPass = (<TextButton name={'Пассажиром'} to={UrlPath.Passenger} startIcon={<EmojiPeopleRounded/>}/>);
        const startLoco = (<TextButton name={'Приемка'} to={UrlPath.LocomotiveStart} startIcon={<TrainRounded/>}/>);
        const endLoco = (<TextButton name={'Сдача'} to={UrlPath.LocomotiveEnd} startIcon={<DirectionsRunRounded/>}/>);
        const train = (<TextButton name={'Поезд'} to={UrlPath.Train} startIcon={<DirectionsRailwayRounded/>}/>);

        switch (lastEvent) {
            case EventType.ShiftStart:
                return (<> {end} {startPass} {startLoco}</>);
            case EventType.LocomotiveStart:
                return (<> {endLoco} {train} </>);
            case EventType.Passenger:
                return (<> {startPass} {end} {startLoco} </>);
            case EventType.Train:
                return (<> {endLoco} {train} </>);
            case EventType.LocomotiveEnd:
                return (<> {startLoco} {end} {startPass} </>);
            case EventType.ShiftEnd:
                break;
        }
    }

    const showCardHelper = (item: ShiftEvents) => {
        switch (item.type) {
            case EventType.ShiftStart:
                return (<ShiftStartCard key={item.id} state={item}/>);
            case EventType.LocomotiveStart:
                return (<LocomotiveStartCard key={item.id} state={item}/>);
            case EventType.Passenger:
                return (<PassengerCard key={item.id} state={item}/>)
            case EventType.Train:
                return (<TrainCard key={item.id} state={item}/>)
            case EventType.LocomotiveEnd:
                return (<LocomotiveEndCard key={item.id} state={item}/>);
            case EventType.ShiftEnd:
                return (<ShiftEndCard key={item.id} state={item}/>);
            default:
                break
        }
    };

    const renderEvent = events.map((item) => showCardHelper(item));

    console.log(renderEvent);

    // (<ShiftEventCard
    // key={item.id}
    // title={item.type}
    // info={item.timeStart}
    // to={'/start'}
    // state={''}
    // />)


    return (
        <>
            <Box sx={{mt: 3, mb: 3}}>
                <TextButtonBack
                    onClick={addToShiftListHandler}
                />
            </Box>
            <Stack spacing={3}>
                {renderEvent}
            </Stack>
            <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                {showButtonHelper(lastEventType)}
            </Stack>
        </>
    );
}
