import React from 'react';
import AppBarMain from "../AppBarMain";
import TextButton from "../TextButton";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProgressTime from "../ProgressTime";
import Typography from '@mui/material/Typography';
import {ArrowBackRounded, PlayArrowRounded} from "@mui/icons-material";
import Stack from "@mui/material/Stack";

export default function MainPage(props: any) {

    const dateHandler = () => {
        const date = new Date()
        const weekday = date.toLocaleDateString('ru-RU', {weekday: "long"})
        const dayMonth = date.toLocaleDateString('ru-RU', {day: "numeric", month: "numeric"})
        return dayMonth + ` ` + weekday
    }

    return (
        <>
            <AppBarMain title={'Норма 180'}/>
            <Container component="main" maxWidth="sm">
                <Grid container spacing={2}
                      sx={{mt: 1, mb: 3}}
                      justifyContent="space-between"
                      alignItems="center"
                >
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color='textSecondary' align='center'>
                            {dateHandler()}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color='textSecondary' align="center">
                            сегодня 160
                        </Typography>
                    </Grid>
                </Grid>
                <Stack>
                    <ProgressTime/>
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    {props.startShiftToggle
                        ? (<TextButton name={'Вернутся'} startIcon={<ArrowBackRounded/>} to={'/shift'}/>)
                        : (<TextButton name={'Начать смену'} startIcon={<PlayArrowRounded/>} to={'/start'}/>)
                    }
                </Stack>
            </Container>
        </>
    );
}

