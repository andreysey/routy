import React, {useState} from "react";
import AppBarMain from "../../AppBarMain";
import Container from '@mui/material/Container';
import TextButtonBack from "../../TextButtonBack";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextFieldInput from "../../TextFieldInput";
import PickTime from "../../pickers/PickTime";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../../TextButton";
import {useAppDispatch} from "../../../hooks";
import {addTrainEvent} from "../shift/shiftSlice";
import {nanoid} from "@reduxjs/toolkit";
import {EventType} from "../shift/types";

export default function TrainPage() {

    const [trainNumber, setTrainNumber] = useState('');
    const [stationStart, setStationStart] = useState('');
    const [timeStart, setTimeStart] = React.useState<number>(Date.now());
    const [stationEnd, setStationEnd] = useState('');
    const [timeEnd, setTimeEnd] = React.useState<number>(Date.now());

    const dispatch = useAppDispatch()

    const addEventHandler = () => {
        dispatch(addTrainEvent({
            id: nanoid(),
            type: EventType.train,
            trainNumber: trainNumber,
            timeStart: timeStart,
            timeEnd: timeEnd,
            stationStart: stationStart,
            stationEnd: stationEnd
        }))
    }

    return (<>
        <AppBarMain title={'Поезд'}/>
        <Container maxWidth="sm">
            <Box sx={{mt: 3, mb: 3}}>
                <TextButtonBack/>
            </Box>
            <Stack spacing={3}>
                <TextFieldInput
                    id={'trainNumber'}
                    label={'Поезд'}
                    placeholder={'Номер'}
                    state={trainNumber}
                    setState={setTrainNumber}
                    type={'number'}/>
                <Divider/>
                <PickTime
                    id={'timeStart'}
                    state={timeStart}
                    setState={setTimeStart}/>
                <TextFieldInput
                    id={'stationStart'}
                    label={'Станция оправления'}
                    state={stationStart}
                    setState={setStationStart}/>
                <Divider/>
                <PickTime
                    id={'timeEnd'}
                    state={timeEnd}
                    setState={setTimeEnd}/>
                <TextFieldInput
                    id={'stationEnd'}
                    label={'Станция прибытия'}
                    state={stationEnd}
                    setState={setStationEnd}/>
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
