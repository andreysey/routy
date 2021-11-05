import React, {useState} from "react";
import Stack from '@mui/material/Stack';
import AppBarMain from "../AppBarMain";
import Container from '@mui/material/Container';
import TextButtonBack from "../TextButtonBack";
import Box from "@mui/material/Box";
import PickTime from "../pickers/PickTime";
import TextFieldInput from "../TextFieldInput";
import TextButton from "../TextButton";
import {SaveAltRounded} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import { addEvent } from "../features/events/eventSlice";
import {nanoid} from "@reduxjs/toolkit";

export default function StartShiftPage(props: any) {

    const [route, setRoute] = useState('');
    const [startShiftTime, setStartShiftTime] = React.useState<Date | null | number>(Date.now());

    const shift = useAppSelector(state => state.shift)

    const dispatch = useAppDispatch()

    const addEventStartShift = () => {
        dispatch(
            addEvent({
                id: nanoid(),
                title: 'Явка',
                info: startShiftTime,
            })
        )
    }

    return (
        <>
            <AppBarMain title={'Начать смену'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    <PickTime
                        id={'startShiftTime'}
                        state={startShiftTime}
                        setState={setStartShiftTime}/>
                    <TextFieldInput
                        id={'route'}
                        state={route}
                        setState={setRoute}
                        label={'Маршрут'}
                        placeholder={'Номер'}
                        type={'number'}/>
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    <TextButton
                        name={'Сохранить'}
                        to={'/shift'}
                        startIcon={<SaveAltRounded/>}
                        onClick={() => {
                            props.setStartShiftToggle(true);
                            // cardsHandler('Явка', startShiftTime);
                            props.setLastAction('Явка');
                            addEventStartShift();
                        }}/>
                </Stack>
            </Container>
        </>
    );
}
