import React from "react";
import AppBarMain from "../../AppBarMain";
import PickDatesYM from '../../pickers/PickDate';
import TextButtonBack from "../../TextButtonBack";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import {useAppSelector} from "../../../hooks";
import ShiftCard from "../../ShiftCard";

export default function ShiftListPage() {

    const list = useAppSelector(state => state.shiftList)

    const renderShifts = list.map((item) => (
        <ShiftCard
            // key={item.id}
            title={item.shiftStart}
            info={item.shiftEnd}
            to={'/shift'}
        />
    ))

    return (<>
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
    </>)
}
