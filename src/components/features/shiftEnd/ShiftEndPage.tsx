import React from "react";
import AppBarMain from "../../AppBarMain";
import TextButtonBack from "../../TextButtonBack";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PickTime from "../../pickers/PickTime";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../../TextButton";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {addShiftEndEvent} from "../shift/shiftSlice";
import {nanoid} from "@reduxjs/toolkit";
import {EventType} from "../shift/types";
import {addToShiftList} from "../shiftList/shiftListSlice";

export default function ShiftEndPage() {

    const [timeEnd, setTimeEnd] = React.useState<number>(Date.now());

    const dispatch = useAppDispatch()

    const shift = useAppSelector(state => state.shift)

    const addEventHandler = () => {
        console.log('addEventHandler')
        dispatch(addShiftEndEvent({
            id: nanoid(),
            type: EventType.shiftEnd,
            timeEnd: timeEnd
        }))

    }

    const addToShiftListHandler = () => {
        return console.log('dispatch')
        // dispatch(addToShiftList({...shift}))
    }

    return (<>
        <AppBarMain title={'Конец смены'}/>
        <Container maxWidth="sm">
            <Box sx={{mt: 3, mb: 3}}>
                <TextButtonBack
                    onClick={addToShiftListHandler}
                />
            </Box>
            <Stack spacing={3}>
                <PickTime
                    id={'timeEnd'}
                    state={timeEnd}
                    setState={setTimeEnd}/>
            </Stack>
            <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                <TextButton
                    name={'Сохранить'}
                    to={'/shift'}
                    startIcon={<SaveAltRounded/>}
                    onClick={addEventHandler}
                />
            </Stack>
        </Container>
    </>)
}
