import React, {useState} from "react";
import AppBarMain from "../../AppBarMain";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextButtonBack from "../../TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextFieldInput from "../../TextFieldInput";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../../TextButton";
import {useAppDispatch} from "../../../hooks";
import {addLocomotiveEndEvent} from "../shift/shiftSlice";
import {nanoid} from "@reduxjs/toolkit";
import {EventType} from "../shift/types";

export default function LocomotiveEndPage() {

    const [electricityCounterA, setElectricityCounterA] = useState('');
    const [electricityCounterB, setElectricityCounterB] = useState('');
    const [recuperationCounterA, setRecuperationCounterA] = useState('');
    const [recuperationCounterB, setRecuperationCounterB] = useState('');

    const dispatch = useAppDispatch()

    const addEventHandler = () => {
        dispatch(addLocomotiveEndEvent({
            id: nanoid(),
            type: EventType.locomotiveEnd,
            electricityCounterA: electricityCounterA,
            electricityCounterB: electricityCounterB,
            recuperationCounterA: recuperationCounterA,
            recuperationCounterB: recuperationCounterB
        }))
    }

    return (<>
        <AppBarMain title={'Сдача локомотива'}/>
        <Container maxWidth="sm">
            <Box sx={{mt: 3, mb: 3}}>
                <TextButtonBack/>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid>
                        <TextFieldInput
                            id={'electricityCounterA'}
                            state={electricityCounterA}
                            setState={setElectricityCounterA}
                            label={'А'}
                            placeholder={'00-00-00'}
                            helperText={'Энергия'}
                            type={'number'}/>
                    </Grid>
                    <Grid>
                        <TextFieldInput
                            id={'recuperationCounterA'}
                            state={recuperationCounterA}
                            setState={setRecuperationCounterA}
                            label={'А'}
                            placeholder={'00-00-00'}
                            helperText={'Рекуперация'}
                            type={'number'}/>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid>
                        <TextFieldInput
                            id={'electricityCounterB'}
                            state={electricityCounterB}
                            setState={setElectricityCounterB}
                            label={'Б'}
                            placeholder={'00-00-00'}
                            helperText={'Энергия'}
                            type={'number'}/>
                    </Grid>
                    <Grid>
                        <TextFieldInput
                            id={'recuperationCounterB'}
                            state={recuperationCounterB}
                            setState={setRecuperationCounterB}
                            label={'Б'}
                            placeholder={'00-00-00'}
                            helperText={'Рекуперация'}
                            type={'number'}/>
                    </Grid>
                </Grid>
            </Grid>
            <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                <TextButton
                    name={'Сохранить'}
                    to={'/shift'}
                    startIcon={<SaveAltRounded/>}
                    onClick={() => {
                        addEventHandler()
                    }}/>
            </Stack>
        </Container>
    </>)
}
