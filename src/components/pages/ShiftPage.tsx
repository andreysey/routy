import React from "react";
import AppBarMain from "../AppBarMain";
import Container from '@mui/material/Container';
import SimpleCard from '../SimpleCard';
import TextButton from "../TextButton";
import {
    DirectionsRailwayRounded,
    DirectionsRunRounded,
    EmojiPeopleRounded,
    LocalBarRounded,
    TrainRounded
} from "@mui/icons-material";
import TextButtonBack from "../TextButtonBack";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";


export default function ShiftPage(props: any) {

    const showButtonHelper = (lastAction: any) => {

        const end = (<TextButton name={'Конец смены'} to={'/end'} startIcon={<LocalBarRounded/>}/>);

        const startPass = (<TextButton name={'Пассажиром'} to={'/start-pass'} startIcon={<EmojiPeopleRounded/>}/>);

        const startLoco = (<TextButton name={'Приемка'} to={'/start-loco'} startIcon={<TrainRounded/>}/>);

        const endLoco = (<TextButton name={'Сдача'} to={'/end-loco'} startIcon={<DirectionsRunRounded/>}/>);

        const train = (<TextButton name={'Поезд'} to={'/start-train'} startIcon={<DirectionsRailwayRounded/>}/>);

        switch (lastAction) {
            case 'Явка':
                return (
                    <>
                        {end}
                        {startPass}
                        {startLoco}
                    </>
                )
            case 'Принят':
                return (
                    <>
                        {endLoco}
                        {train}
                    </>
                )
            case 'Пассажиром':
                return (
                    <>
                        {startPass}
                        {end}
                        {startLoco}
                    </>
                )
            case 'Поезд':
                return (
                    <>
                        {endLoco}
                        {train}
                    </>
                )
            case 'Сдан':
                return (
                    <>
                        {startLoco}
                        {end}
                        {startPass}
                    </>
                )
            case 'Конец смены':
                break;
        }
    }

    return (
        <>
            <AppBarMain title={'Смена'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    {props.cards.map((card: { title: string | undefined; info: string | undefined; }, i: any) => {
                        return (<SimpleCard
                                    key={i}
                                    title={card.title}
                                    info={card.info}
                                    to={'/start'}
                                    state={''}
                                />)
                    })}
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    {showButtonHelper(props.lastAction)}
                </Stack>
            </Container>
        </>
    );
}
