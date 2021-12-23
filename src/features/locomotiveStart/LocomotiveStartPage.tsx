import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import TextButtonBack from "../../components/TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SelectLoco from "../../components/SelectLoco";
import TextFieldInput from "../../components/TextFieldInput";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../../components/TextButton";
import {useAppDispatch} from "../../hooks";
import {addLocomotiveStartEvent} from "../shift/shiftSlice";
import {nanoid} from "@reduxjs/toolkit";
import {EventType} from "../shift/types";

export default function LocomotiveStartPage() {

    const [model, setModel] = useState('');
    const [number, setNumber] = useState('');
    const [electricityCounterA, setElectricityCounterA] = useState('');
    const [electricityCounterB, setElectricityCounterB] = useState('');
    const [recuperationCounterA, setRecuperationCounterA] = useState('');
    const [recuperationCounterB, setRecuperationCounterB] = useState('');

    const dispatch = useAppDispatch()

    const addEventHandler = () => {
        dispatch(addLocomotiveStartEvent({
            id: nanoid(),
            type: EventType.LocomotiveStart,
            model: model,
            number: number,
            electricityCounterA: electricityCounterA,
            electricityCounterB: electricityCounterB,
            recuperationCounterA: recuperationCounterA,
            recuperationCounterB: recuperationCounterB
        }))
    };

    return (<>
        <Box sx={{mt: 3, mb: 3}}>
            <TextButtonBack/>
        </Box>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Grid>
                    <SelectLoco
                        id={'model'}
                        state={model}
                        setState={setModel}/>
                </Grid>
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
                        id={'locoNumber'}
                        state={number}
                        setState={setNumber}
                        label={'Номер'}
                        placeholder={'Локомотива'}
                        helperText={' '}
                        type={'number'}/>
                </Grid>
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
                    addEventHandler();
                }}/>
        </Stack>
    </>)
}
