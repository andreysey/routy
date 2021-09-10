import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMain from "../AppBarMain";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../SimpleCard';
import TextButton from "../TextButton";
import LocalBarRoundedIcon from "@material-ui/icons/LocalBarRounded";
import EmojiPeopleRoundedIcon from "@material-ui/icons/EmojiPeopleRounded";
import TrainRoundedIcon from "@material-ui/icons/TrainRounded";
import DirectionsRailwayRoundedIcon from "@material-ui/icons/DirectionsRailwayRounded";
import DirectionsRunRoundedIcon from "@material-ui/icons/DirectionsRunRounded";
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

const timeHandler = (date: any) => {
    let hour = date.getHours().toString()
    let minutes = date.getMinutes().toString()

    if (hour.length === 1) hour = '0' + hour
    if (minutes.length === 1) minutes = '0' + minutes

     return   hour + `:` + minutes
}

export default function ShiftPage(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMain title={'Смена'}/>
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container>
                    <TextButtonBack/>
                </Grid>
                <Grid
                    container
                >
                    <Grid item xs={12}>
                        <SimpleCard
                            name={'Явка'}
                            info={timeHandler(props.startShiftTime)}
                            to={'/start'}
                            state={props.startShiftDate}
                        />
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                    {/*    <SimpleCard*/}
                    {/*        name={'Пассажиром'}*/}
                    {/*        info={'15:30 / --:--'}*/}
                    {/*        to={'/start-pass'}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <SimpleCard*/}
                    {/*        name={'Принят'}*/}
                    {/*        info={'ВЛ-11 074'}*/}
                    {/*        to={'/start-loco'}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <SimpleCard*/}
                    {/*        name={'Поезд'}*/}
                    {/*        info={'15:30 / 17:29'}*/}
                    {/*        to={'/start-train'}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <SimpleCard*/}
                    {/*        name={'Сдан'}*/}
                    {/*        info={'ВЛ-11 485'}*/}
                    {/*        to={'/end-loco'}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*    <SimpleCard*/}
                    {/*        name={'Конец работы'}*/}
                    {/*        info={'23:59'}*/}
                    {/*        to={'/end'}*/}
                    {/*    />*/}
                    {/*</Grid>*/}

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
                    <Grid item>
                        <TextButton
                            name={'Конец смены'}
                            to={'/end'}
                            startIcon={<LocalBarRoundedIcon/>}
                        />
                    </Grid>
                    <Grid item>
                        <TextButton
                            name={'Пассажиром'}
                            to={'/start-pass'}
                            startIcon={<EmojiPeopleRoundedIcon/>}
                        />
                    </Grid>
                    <Grid item>
                        <TextButton
                            name={'Приемка'}
                            to={'/start-loco'}
                            startIcon={<TrainRoundedIcon/>}
                        />
                    </Grid>
                    <Grid item>
                        <TextButton
                            name={'Поезд'}
                            to={'/start-train'}
                            startIcon={<DirectionsRailwayRoundedIcon/>}
                        />
                    </Grid>
                    <Grid item>
                        <TextButton
                            name={'Сдача'}
                            to={'/end-loco'}
                            startIcon={<DirectionsRunRoundedIcon/>}
                        />
                    </Grid>
                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}
