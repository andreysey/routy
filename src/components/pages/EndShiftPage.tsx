import React from "react";
import AppBarMain from "../AppBarMain";
import TextButtonBack from "../TextButtonBack";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function StartShiftPage(props: any) {
    return (
        <>
            <AppBarMain title={'Конец смены'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Stack spacing={3}>
                    {props.time}
                </Stack>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    {props.saveButton}
                </Stack>
            </Container>
        </>
    );
}
