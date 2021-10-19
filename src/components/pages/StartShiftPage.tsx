import React from "react";
import Stack from '@mui/material/Stack';
import AppBarMain from "../AppBarMain";
import Container from '@mui/material/Container';
import TextButtonBack from "../TextButtonBack";
import Box from "@mui/material/Box";

export default function StartShiftPage(props: any) {
    return (
        <>
            <AppBarMain title={'Начать смену'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    {props.time}
                    {props.routeInput}
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    {props.saveButton}
                </Stack>
            </Container>
        </>
    );
}
