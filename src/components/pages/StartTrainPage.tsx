import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMainPage from "../appBar/AppBarMainPage";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import PickDates from "../pickers/PickDates";
import PickTimes from "../pickers/PickTimes";
import ButtonSave from "../buttons/ButtonSave";
import ButtonBack from "../buttons/ButtonBack";
import TextTrainNumber from '../textFields/TextTrainNumber';
import TextDepartureStation from '../textFields/TextDepartureStation';
import TextArrivalStation from '../textFields/TextArrivalStation';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            // backgroundColor: 'grey',

        },
        header: {},
        main: {
            marginTop: theme.spacing(2),
            // padding: theme.spacing(4),
            // backgroundColor: 'grey',
        },
        footer: {
            padding: theme.spacing(4),
        },
    }),
);

export default function StartTrainPage() {
    const classes = useStyles();

    const propsAppBar = {title: 'Поезд'}

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMainPage {...propsAppBar} />
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container
                >
                    <ButtonBack/>
                </Grid>
                <Grid container
                      spacing={2}
                >
                    <Grid item xs={12}>
                        <TextTrainNumber/>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <TextDepartureStation/>
                    </Grid>

                    <Grid item xs={7}>
                        <PickDates/>
                    </Grid>
                    <Grid item xs={5}>
                        <PickTimes/>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <TextArrivalStation/>
                    </Grid>

                    <Grid item xs={7}>
                        <PickDates/>
                    </Grid>
                    <Grid item xs={5}>
                        <PickTimes/>
                    </Grid>
                </Grid>
            </Container>
            {/* End main */}

            {/* Footer */}
            <Container className={classes.footer} maxWidth="sm">
                <Grid container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                >
                    <Grid item xs={12}>
                        <ButtonSave/>
                    </Grid>

                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}
