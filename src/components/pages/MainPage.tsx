import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarMain from "../AppBarMain";
import TextButton from "../TextButton";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ProgressTime from "../ProgressTime";
import Typography from '@material-ui/core/Typography';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

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
        progress: {
            marginTop: theme.spacing(10),
        },
        footer: {
            padding: theme.spacing(4),
        },
    }),
);

export default function MainPage(props: any) {
    const classes = useStyles();


    const dateHandler = () => {
        const date = new Date()
        const weekday = date.toLocaleDateString('ru-RU', {weekday: "long"})
        const dayMonth = date.toLocaleDateString('ru-RU', {day: "numeric", month: "numeric"})
        return dayMonth + ` ` + weekday
    }

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMain title={'Норма 180'}/>
            </div>
            {/* Main */}
            <Container component="main" className={classes.main} maxWidth="sm">
                <Grid container
                      justifyContent="space-between"
                      alignItems="center"
                >
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color='textSecondary' align='center'>
                            {dateHandler()}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color='textSecondary' align="center">
                            сегодня 160
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.progress}
                      container
                    // spacing={4}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                >
                    <ProgressTime/>
                </Grid>

            </Container>
            {/* End main */}

            {/* Footer */}
            <Container className={classes.footer} maxWidth="sm">
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sm={12}>
                        {props.startShiftToggle
                            ? < TextButton name={'Вернутся'} startIcon={<ArrowBackRoundedIcon/>} to={'/shift'}/>
                            : <TextButton name={'Начать смену'} startIcon={<PlayArrowRoundedIcon/>} to={'/start'}/>
                        }
                    </Grid>
                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}

