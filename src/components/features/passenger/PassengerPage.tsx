import React, {useState} from "react";
import Container from '@mui/material/Container';
import AppBarMain from "../../AppBarMain";
import TextButtonBack from "../../TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextFieldInput from "../../TextFieldInput";
import PickTime from "../../pickers/PickTime";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../../TextButton";
import {nanoid} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../../hooks";

export default function PassengerPage(props: any) {
    const [passTrain, setPassTrain] = useState('');
    const [passStationDeparture, setPassStationDeparture] = useState('');
    const [passTimeDeparture, setPassTimeDeparture] = React.useState<Date | null>(new Date());
    const [passStationArrival, setPassStationArrival] = useState('');
    const [passTimeArrival, setPassTimeArrival] = React.useState<Date | null>(new Date());

    const dispatch = useAppDispatch()

    const addEventStartPass = () => {

    }

    return (
        <>
            <AppBarMain title={'Пассажиром'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    <TextFieldInput
                        id={'passTrain'}
                        label={'Поезд'}
                        placeholder={'Номер'}
                        state={passTrain}
                        setState={setPassTrain}
                        type={'number'}/>
                    <Divider/>
                    <PickTime
                        id={'passTimeDeparture'}
                        state={passTimeDeparture}
                        setState={setPassTimeDeparture}/>
                    <TextFieldInput
                        id={'passStationDeparture'}
                        label={'Станция оправления'}
                        state={passStationDeparture}
                        setState={setPassStationDeparture}/>
                    <Divider/>
                    <PickTime
                        id={'passTimeArrival'}
                        state={passTimeArrival}
                        setState={setPassTimeArrival}/>
                    <TextFieldInput
                        id={'passStationArrival'}
                        label={'Станция прибытия'}
                        state={passStationArrival}
                        setState={setPassStationArrival}/>
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    <TextButton
                        name={'Сохранить'}
                        to={'/shift'}
                        startIcon={<SaveAltRounded/>}
                        onClick={() => {
                            addEventStartPass();
                            props.setLastAction('Пассажиром');
                        }}/>
                </Stack>
            </Container>

        </>
    );
}
