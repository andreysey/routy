import React from "react";
import AppBarMain from "../AppBarMain";
import PickDatesYM from '../pickers/PickDate';
import TextButtonBack from "../TextButtonBack";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import {useAppSelector} from "../../hooks";
import ShiftCard from "../ShiftCard";

export default function HistoryPage() {

    const shifts = useAppSelector(state => state.shift)

    // const dispatch = useAppDispatch()

    const renderShifts = shifts.map(shift => (
        <ShiftCard key={shift.id}
                   title={shift.shiftStart}
                   info={shift.shiftEnd}
                   to={'/shift'}
        />
    ))

    return (
        <>
            <AppBarMain title={'Маршруты'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    <PickDatesYM/>
                    <Divider/>
                    {renderShifts}
                </Stack>
            </Container>
        </>
    );
}
