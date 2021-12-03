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
import {useAppDispatch} from "../../../hooks";
import {addShiftStartEvent} from "../shift/shiftSlice";
import {nanoid} from "@reduxjs/toolkit";
import {EventType} from "../shift/types";

export default function ShiftStartPage() {

    const [route, setRoute] = useState('');
    const [time, setTime] = React.useState<number>(Date.now());

    const dispatch = useAppDispatch()

    const addEventHandler = () => {
        dispatch(addShiftStartEvent({
            id: nanoid(),
            type: EventType.shiftStart,
            timeStart: time,
            route: route
        }))
    }

    return (<>
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
                        addEventHandler();
                    }}/>
            </Stack>
        </Container>
    </>)
}
