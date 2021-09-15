import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMain from "../AppBarMain";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import TextButtonBack from "../TextButtonBack";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',

        },
        header: {},
        main: {
            marginTop: theme.spacing(2),
        },
        footer: {
            padding: theme.spacing(4),
        },
    }),
);

export default function StartShiftPage(props: any) {
    const classes = useStyles();
    console.log(props)
    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMain title={'Начать смену'}/>
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container>
                    <TextButtonBack/>
                </Grid>
                <Grid
                    container
                    spacing={4}
                >
                    <Grid item xs={12}>
                        {props.date}
                    </Grid>
                    <Grid item xs={12}>
                        {props.time}
                    </Grid>
                    <Grid item xs={12}>
                        {props.routeInput}
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
                        {props.saveButton}
                    </Grid>
                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}
