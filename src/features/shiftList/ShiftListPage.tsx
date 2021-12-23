import React from "react";
import PickDatesYM from '../../components/pickers/PickDate';
import TextButtonBack from "../../components/TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import {useAppSelector} from "../../hooks";
import ShiftListCard from "./ShifListCard";

export default function ShiftListPage() {

    const list = useAppSelector(state => state.shiftList)

    const renderShifts = list.map((item) => (
        <ShiftListCard
            key={item.id}
            start={item.timeStart}
            end={item.timeEnd}
            to={'/shift'}
        />
    ))

    return (<>
            <Box sx={{mt: 3, mb: 3}}>
                <TextButtonBack/>
            </Box>
            <Stack spacing={3}>
                <PickDatesYM/>
                <Divider/>
                {list.length > 0 ? renderShifts : 'Нет маршрутов'}
            </Stack>
    </>)
}
