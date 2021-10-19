import React from "react";
import Container from '@mui/material/Container';
import AppBarMain from "../AppBarMain";
import TextButtonBack from "../TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function StartPassPage(props: any) {
    return (
        <>
            <AppBarMain title={'Пассажиром'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    {props.passTrain}
                    <Divider/>
                    {props.timeDeparture}
                    {props.passStationDeparture}
                    <Divider/>
                    {props.timeArrival}
                    {props.passStationArrival}
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    {props.saveButton}
                </Stack>
            </Container>

        </>
    );
}
