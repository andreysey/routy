import React from "react";
import AppBarMain from "../AppBarMain";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextButtonBack from "../TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function EndLocoPage(props: any) {
    return (
        <>
            <AppBarMain title={'Сдача локомотива'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Grid>
                            {props.endEnergyA}
                        </Grid>
                        <Grid>
                            {props.endRecupA}
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid>
                            {props.endEnergyB}
                        </Grid>
                        <Grid>
                            {props.endRecupB}
                        </Grid>
                    </Grid>
                </Grid>
                <Stack spacing={2} sx={{mt: 3, mb: 3}} justifyContent="center" alignItems="center">
                    {props.saveButton}
                </Stack>
            </Container>
        </>
    );
}
