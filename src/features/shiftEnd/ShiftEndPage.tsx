import React from "react";
import TextButtonBack from "../../components/TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PickTime from "../../components/pickers/PickTime";
import {SaveAltRounded} from "@mui/icons-material";
import TextButton from "../../components/TextButton";
import {useAppDispatch} from "../../hooks";
import {addShiftEndEvent} from "../shiftEvents/shiftSlice";
import {nanoid} from "@reduxjs/toolkit";
import {EventType} from "../shiftEvents/types";
import {UrlPath} from "../../App";

export default function ShiftEndPage() {

    const [timeEnd, setTimeEnd] = React.useState<number>(Date.now());

    const dispatch = useAppDispatch()

    const addEventHandler = () => {
        dispatch(addShiftEndEvent({
            id: nanoid(),
            type: EventType.ShiftEnd,
            timeEnd: timeEnd
        }))
    }

    return (<>
            <Box sx={{mt: 3, mb: 3}}>
                <TextButtonBack/>
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
                    to={UrlPath.ShiftEvents}
                    startIcon={<SaveAltRounded/>}
                    onClick={addEventHandler}
                />
            </Stack>
    </>)
}
