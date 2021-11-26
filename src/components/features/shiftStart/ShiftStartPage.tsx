import React, {useState} from "react";
import Stack from '@mui/material/Stack';
import AppBarMain from "../../AppBarMain";
import Container from '@mui/material/Container';
import TextButtonBack from "../../TextButtonBack";
import Box from "@mui/material/Box";
import PickTime from "../../pickers/PickTime";
import TextFieldInput from "../../TextFieldInput";
import TextButton from "../../TextButton";
import {SaveAltRounded} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {addShiftStartEvent, startShift} from "../shift/shiftSlice";
import {nanoid} from "@reduxjs/toolkit";

export default function ShiftStartPage(props: any) {

    const [route, setRoute] = useState('');
    const [time, setTime] = React.useState<number>(Date.now());

    const shift = useAppSelector(state => state.shift)

    const dispatch = useAppDispatch()

    const addEvent = () => {
        dispatch(addShiftStartEvent({
            id: nanoid(),
            type: 'startShift',
            timeStart: time,
            route: route
        }))
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
                        state={time}
                        setState={setTime}/>
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
                            props.setLastAction('Явка');
                            addEvent();
                        }}/>
                </Stack>
            </Container>
        </>
    );
}
