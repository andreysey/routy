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

export default function LocomotiveEndPage(props: any) {

    const [endEnergyA, setEndEnergyA] = useState('');
    const [endEnergyB, setEndEnergyB] = useState('');
    const [endRecupA, setEndRecupA] = useState('');
    const [endRecupB, setEndRecupB] = useState('');

    const dispatch = useAppDispatch()

    const addEventEndLoco = () => {

    }

    return (
        <>
            <AppBarMain title={'Сдача локомотива'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Grid>
                            <TextFieldInput
                                id={'endEnergyA'}
                                state={endEnergyA}
                                setState={setEndEnergyA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}/>
                        </Grid>
                        <Grid>
                            <TextFieldInput
                                id={'endRecupA'}
                                state={endRecupA}
                                setState={setEndRecupA}
                                label={'А'}
                                placeholder={'00-00-00'}
                                helperText={'Рекуперация'}
                                type={'number'}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid>
                            <TextFieldInput
                                id={'endEnergyB'}
                                state={endEnergyB}
                                setState={setEndEnergyB}
                                label={'Б'}
                                placeholder={'00-00-00'}
                                helperText={'Энергия'}
                                type={'number'}/>
                        </Grid>
                        <Grid>
                            <TextFieldInput
                                id={'endRecupB'}
                                state={endRecupB}
                                setState={setEndRecupB}
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
                            addEventEndLoco()
                            props.setLastAction('Сдан');
                        }}/>
                </Stack>
            </Container>
        </>
    );
}
