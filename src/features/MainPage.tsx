import React from 'react';
import TextButton from "../components/TextButton";
import Grid from '@mui/material/Grid';
import ProgressTime from "../components/ProgressTime";
import Typography from '@mui/material/Typography';
import {ArrowBackRounded, PlayArrowRounded} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import {useAppSelector} from "../hooks";
import {EventType} from "./shiftEvents/types";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {UrlPath} from '../App';

export default function MainPage() {

    const events = useAppSelector(state => state.shift.events)

    const lastEventType = events[events.length - 1]?.type || EventType.Blank

    const dateNow = () => format(Date.now(), 'dd.MM EEEE', {locale: ru})

    return (<>
        <Grid container spacing={2}
              sx={{mt: 1, mb: 3}}
              justifyContent="space-between"
              alignItems="center"
        >
            <Grid item xs={6}>
                <Typography variant="subtitle2" color='textSecondary' align='center'>
                    {dateNow()}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle2" color='textSecondary' align="center">
                    сегодня TODO
                </Typography>
            </Grid>
        </Grid>
        <Stack>
            <ProgressTime/>
        </Stack>
        <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
            {lastEventType
                ? (<TextButton name={'Вернутся'} startIcon={<ArrowBackRounded/>} to={UrlPath.ShiftEvents}/>)
                : (<TextButton name={'Начать смену'} startIcon={<PlayArrowRounded/>} to={UrlPath.ShiftStart}/>)
            }
        </Stack>
    </>)
}

