import React from "react";
import AppBarMain from "../AppBarMain";
import PickDatesYM from '../pickers/PickDate';
import TextButtonBack from "../TextButtonBack";
import SimpleCard from "../SimpleCard";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function HistoryPage() {
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
                    <SimpleCard
                        title={'24.08.21  2002/4004'}
                        info={''}
                        to={'/shift'}
                    />
                    <SimpleCard
                        title={'24.08.21  2002/4004'}
                        info={''}
                        to={'/shift'}
                    />
                    <SimpleCard
                        title={'24.08.21  2002/4004'}
                        info={''}
                        to={'/shift'}
                    />
                </Stack>
            </Container>
        </>
    );
}
