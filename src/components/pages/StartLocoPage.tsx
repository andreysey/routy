import React from "react";
import AppBarMain from "../AppBarMain";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextButtonBack from "../TextButtonBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function StartLocoPage(props: any) {
    return (
        <>
            <AppBarMain title={'Приемка локомотива'}/>
            <Container maxWidth="sm">
                <Box sx={{mt: 3, mb: 3}}>
                    <TextButtonBack/>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Grid>
                            {props.locoType}
                        </Grid>
                        <Grid>
                            {props.startEnergyA}
                        </Grid>
                        <Grid>
                            {props.startRecupA}
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid>
                            {props.locoNumber}
                        </Grid>
                        <Grid>
                            {props.startEnergyB}
                        </Grid>
                        <Grid>
                            {props.startRecupB}
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
