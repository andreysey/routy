import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMain from "../AppBarMain";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import SaveAltRoundedIcon from "@material-ui/icons/SaveAltRounded";
import TextButton from "../TextButton";
import TextButtonBack from "../TextButtonBack";

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

export default function StartPassPage(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMain title={'Пассажиром'}/>
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container
                >
                    <TextButtonBack/>
                </Grid>
                <Grid container
                      spacing={2}
                >
                    <Grid item xs={12}>
                        {props.passTrain}
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        {props.passStationDeparture}
                    </Grid>

                    <Grid item xs={7}>
                        {props.dateDeparture}
                    </Grid>
                    <Grid item xs={5}>
                        {props.timeDeparture}
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        {props.passStationArrival}
                    </Grid>

                    <Grid item xs={7}>
                        {props.dateArrival}
                    </Grid>
                    <Grid item xs={5}>
                        {props.timeArrival}
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
                        <TextButton
                            name={'Сохранить'}
                            to={'/shift'}
                            startIcon={<SaveAltRoundedIcon/>}
                        />
                    </Grid>

                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}
