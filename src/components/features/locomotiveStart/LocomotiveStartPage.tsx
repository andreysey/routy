import React, {useState} from "react";
import AppBarMain from "../../AppBarMain";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextButtonBack from "../../TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SelectLoco from "../../SelectLoco";
import TextFieldInput from "../../TextFieldInput";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../../TextButton";
import {useAppDispatch} from "../../../hooks";

export default function LocomotiveStartPage(props: any) {

    const [model, setModel] = useState('');
    const [number, setNumber] = useState('');
    const [electricityCounterA, setElectricityCounterA] = useState('');
    const [electricityCounterB, setElectricityCounterB] = useState('');
    const [recuperationCounterA, setRecuperationCounterA] = useState('');
    const [recuperationCounterB, setRecuperationCounterB] = useState('');

    const dispatch = useAppDispatch()

    const addEvent = () => {

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
                            addEvent();
                            props.setLastAction('Принят');
                        }}/>
                </Stack>
            </Container>
        </>
    );
}
