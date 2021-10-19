import React from "react";
import AppBarMain from "../AppBarMain";
import Container from '@mui/material/Container';
import TextButtonBack from "../TextButtonBack";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function StartTrainPage(props: any) {
    return (
        <>
            <AppBarMain title={'Поезд'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    {props.train}
                    <Divider/>
                    {props.timeDeparture}
                    {props.trainStationDeparture}
                    <Divider/>
                    {props.timeArrival}
                    {props.trainStationArrival}
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    {props.saveButton}
                </Stack>
            </Container>
        </>
    );
}
