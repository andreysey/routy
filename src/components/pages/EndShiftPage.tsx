import React from "react";
import AppBarMain from "../AppBarMain";
import TextButtonBack from "../TextButtonBack";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PickTime from "../pickers/PickTime";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../TextButton";
import {useAppDispatch} from "../../hooks";
import {addEvent} from "../features/events/eventSlice";
import {nanoid} from "@reduxjs/toolkit";

export default function StartShiftPage(props: any) {
    const [endShiftTime, setEndShiftTime] = React.useState<Date | null | number>(Date.now());

    const dispatch = useAppDispatch()

    const addEventEndShift = () => {
        dispatch(
            addEvent({
                id: nanoid(),
                title: 'Конец смены',
                info: endShiftTime,
            })
        )
    }


    return (
        <>
            <AppBarMain title={'Конец смены'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    <PickTime
                        id={'endShiftTime'}
                        state={endShiftTime}
                        setState={setEndShiftTime}/>
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    <TextButton
                        name={'Сохранить'}
                        to={'/shift'}
                        startIcon={<SaveAltRounded/>}
                        onClick={() => {
                            addEventEndShift();
                            props.setLastAction('Конец смены');
                        }}/>
                </Stack>
            </Container>
        </>
    );
}
