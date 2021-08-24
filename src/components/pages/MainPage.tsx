import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarMainPage from "../appBar/AppBarMainPage";
import ButtonStartShift from "../buttons/ButtonStartShift";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import logo from '../../logo.svg';
import ButtonCurrentShift from "../buttons/ButtonСurrentShift";
import Grid from '@material-ui/core/Grid';
import ProgressTime from "../progress/ProgressTime";
import ButtonBack from "../buttons/ButtonBack";
import Typography from '@material-ui/core/Typography';


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


export default function MainPage() {
    const classes = useStyles();


    const propsAppBar = {title: 'Норма 180'}

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMainPage {...propsAppBar}/>
            </div>
            {/* Main */}
            <Container component="main" className={classes.main} maxWidth="sm">
                <Grid container
                      justifyContent="space-around"
                      alignItems="center"
                >
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color='textSecondary' align="left">
                            24 августа
                        </Typography>
                    </Grid>
                    {/*<Grid item xs={4}>*/}
                    {/*    <Typography variant="subtitle2" color='textSecondary'>*/}
                    {/*        норма 180*/}
                    {/*    </Typography>*/}
                    {/*</Grid>*/}
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color='textSecondary' align="right">
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
                    <Grid item xs>
                        <ButtonStartShift/>
                    </Grid>
                    <Grid item xs>
                        <ButtonCurrentShift/>
                    </Grid>
                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}

