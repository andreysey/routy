import React, {useState} from "react";
import AppBarMain from "../AppBarMain";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextButtonBack from "../TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SelectLoco from "../SelectLoco";
import TextFieldInput from "../TextFieldInput";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../TextButton";
import {addEvent} from "../features/events/eventSlice";
import {nanoid} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../hooks";

export default function StartLocoPage(props: any) {
    const [locoType, setLocoType] = useState('');
    const [locoNumber, setLocoNumber] = useState('');
    const [startEnergyA, setStartEnergyA] = useState('');
    const [startEnergyB, setStartEnergyB] = useState('');
    const [startRecupA, setStartRecupA] = useState('');
    const [startRecupB, setStartRecupB] = useState('');

    const dispatch = useAppDispatch()

    const addEventStartLoco = () => {
        dispatch(
            addEvent({
                id: nanoid(),
                title: 'Принят',
                info: locoNumber,
            })
        )
    }

    return (
        <>
            <AppBarMain title={'Приемка локомотива'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Grid>
                            <SelectLoco
                                id={'locoType'}
                                state={locoType}
                                setState={setLocoType}/>
                        </Grid>
                        <Grid>
                            <TextFieldInput
                                id={'startEnergyA'}
                                state={startEnergyA}
                                setState={setStartEnergyA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}/>
                        </Grid>
                        <Grid>
                            <TextFieldInput
                                id={'startRecupA'}
                                state={startRecupA}
                                setState={setStartRecupA}
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
                                state={locoNumber}
                                setState={setLocoNumber}
                                label={'Номер'}
                                placeholder={'Локомотива'}
                                helperText={' '}
                                type={'number'}/>
                        </Grid>
                        <Grid>
                            <TextFieldInput
                                id={'startEnergyB'}
                                state={startEnergyB}
                                setState={setStartEnergyB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}/>
                        </Grid>
                        <Grid>
                            <TextFieldInput
                                id={'startRecupB'}
                                state={startRecupB}
                                setState={setStartRecupB}
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
                            addEventStartLoco();
                            props.setLastAction('Принят');
                        }}/>
                </Stack>
            </Container>
        </>
    );
}
