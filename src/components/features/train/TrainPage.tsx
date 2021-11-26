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

export default function TrainPage(props: any) {

    const [train, setTrain] = useState('');
    const [trainStationDeparture, setTrainStationDeparture] = useState('');
    const [trainTimeDeparture, setTrainTimeDeparture] = React.useState<Date | null>(new Date());
    const [trainStationArrival, setTrainStationArrival] = useState('');
    const [trainTimeArrival, setTrainTimeArrival] = React.useState<Date | null>(new Date());

    const dispatch = useAppDispatch()

    const addEventTrain = () => {

    }

    return (
        <>
            <AppBarMain title={'Поезд'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    <TextFieldInput
                        id={'train'}
                        label={'Поезд'}
                        placeholder={'Номер'}
                        state={train}
                        setState={setTrain}/>
                    <Divider/>
                    <PickTime
                        id={'trainTimeDeparture'}
                        state={trainTimeDeparture}
                        setState={setTrainTimeDeparture}/>
                    <TextFieldInput
                        id={'trainStationDeparture'}
                        label={'Станция оправления'}
                        state={trainStationDeparture}
                        setState={setTrainStationDeparture}/>
                    <Divider/>
                    <PickTime
                        id={'trainTimeArrival'}
                        state={trainTimeArrival}
                        setState={setTrainTimeArrival}/>
                    <TextFieldInput
                        id={'trainStationArrival'}
                        label={'Станция прибытия'}
                        state={trainStationArrival}
                        setState={setTrainStationArrival}/>
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    <TextButton
                        name={'Сохранить'}
                        to={'/shift'}
                        startIcon={<SaveAltRounded/>}
                        onClick={() => {
                            addEventTrain();
                            props.setLastAction('Поезд');
                        }}/>
                </Stack>
            </Container>
        </>
    );
}
