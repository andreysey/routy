import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMain from "../AppBarMain";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import PickDates from "../pickers/PickDates";
import PickTimes from "../pickers/PickTimes";
import SaveAltRoundedIcon from "@material-ui/icons/SaveAltRounded";
import TextButton from "../TextButton";
import TextButtonBack from "../TextButtonBack";

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

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMain title={'Конец смены'}/>
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container>
                    <TextButtonBack/>
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
