import React from "react";
import AppBarMain from "../../AppBarMain";
import Container from '@mui/material/Container';
import EventCard from '../../EventCard';
import TextButton from "../../TextButton";
import {
    DirectionsRailwayRounded,
    DirectionsRunRounded,
    EmojiPeopleRounded,
    LocalBarRounded,
    TrainRounded
} from "@mui/icons-material";
import TextButtonBack from "../../TextButtonBack";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {useAppSelector} from "../../../hooks";
import {EventType} from "./types";


export default function ShiftPage() {

    const events = useAppSelector(state => state.shift.events)

    const lastEventType = events[events.length - 1]?.type || EventType.blank

    const showButtonHelper = (lastEvent: string) => {

        const end = (<TextButton name={'Конец смены'} to={'/end'} startIcon={<LocalBarRounded/>}/>);

        const startPass = (<TextButton name={'Пассажиром'} to={'/start-pass'} startIcon={<EmojiPeopleRounded/>}/>);

        const startLoco = (<TextButton name={'Приемка'} to={'/start-loco'} startIcon={<TrainRounded/>}/>);

        const endLoco = (<TextButton name={'Сдача'} to={'/end-loco'} startIcon={<DirectionsRunRounded/>}/>);

        const train = (<TextButton name={'Поезд'} to={'/start-train'} startIcon={<DirectionsRailwayRounded/>}/>);

        switch (lastEvent) {
            case EventType.shiftStart:
                return (<>
                        {end}
                        {startPass}
                        {startLoco}
                    </>)
            case EventType.locomotiveStart:
                return (<>
                        {endLoco}
                        {train}
                    </>)
            case EventType.passenger:
                return (<>
                        {startPass}
                        {end}
                        {startLoco}
                    </>)
            case EventType.train:
                return (<>
                        {endLoco}
                        {train}
                    </>)
            case EventType.locomotiveEnd:
                return (<>
                        {startLoco}
                        {end}
                        {startPass}
                    </>)
            case EventType.shiftEnd:
                break;
        }
    }

    const renderEvent = events.map((item: { id: React.Key | null | undefined; type: string | number | Date | null | undefined;}) => (
            <EventCard
                key={item.id}
                title={item.type}
                // info={item.info}
                to={'/start'}
                state={''}
            />
    ))

    return (
        <>
            <AppBarMain title={'Смена'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    {renderEvent}
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    {showButtonHelper(lastEventType)}
                </Stack>
            </Container>
        </>
    );
}
