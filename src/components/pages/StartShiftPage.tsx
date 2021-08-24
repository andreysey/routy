import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMainPage from "../appBar/AppBarMainPage";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import PickDates from "../pickers/PickDates";
import PickTimes from "../pickers/PickTimes";
import ButtonSave from "../buttons/ButtonSave";
import RouteNumber from '../textFields/TextRouteNumber';
import ButtonBack from "../buttons/ButtonBack";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',

        },
        header: {

        },
        main: {
            marginTop: theme.spacing(2),
        },
        footer: {
            padding: theme.spacing(4),
        },
    }),
);

export default function StartShiftPage() {
    const classes = useStyles();

    const propsAppBar = {title: 'Начать смену'}

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMainPage {...propsAppBar} />
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container>
                    <ButtonBack/>
                </Grid>
                <Grid
                    container
                    spacing={4}
                    // direction="column"
                    // justifyContent="center"
                    // alignItems="center"
                >
                    <Grid item xs={12}>
                        <PickDates/>
                    </Grid>
                    <Grid item xs={12}>
                        <PickTimes/>
                    </Grid>
                    <Grid item xs={12}>
                        <RouteNumber/>
                    </Grid>
                </Grid>
            </Container>
            {/* End main */}

            {/* Footer */}
            <Container className={classes.footer} maxWidth="sm">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Grid item>
                        <ButtonSave/>
                    </Grid>
                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}
