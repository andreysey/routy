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
import {ICards} from "../../interfaces";

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


export default function ShiftPage(props: any) {
    const classes = useStyles();

    const showButtonHelper = (lastAction: any) => {
        const end = (<Grid item>
            <TextButton
                name={'Конец смены'}
                to={'/end'}
                startIcon={<LocalBarRoundedIcon/>}
            />
        </Grid>);

        const startPass = (
            <Grid item>
                <TextButton
                    name={'Пассажиром'}
                    to={'/start-pass'}
                    startIcon={<EmojiPeopleRoundedIcon/>}
                />
            </Grid>
        );

        const startLoco = (
            <Grid item>
                <TextButton
                    name={'Приемка'}
                    to={'/start-loco'}
                    startIcon={<TrainRoundedIcon/>}
                />
            </Grid>
        );

        const endLoco = (
            <Grid item>
                <TextButton
                    name={'Сдача'}
                    to={'/end-loco'}
                    startIcon={<DirectionsRunRoundedIcon/>}
                />
            </Grid>
        );

        const train = (
            <Grid item>
                <TextButton
                    name={'Поезд'}
                    to={'/start-train'}
                    startIcon={<DirectionsRailwayRoundedIcon/>}
                />
            </Grid>
        );

        switch (lastAction) {
            case 'Явка':
                return (
                    <>
                        {end}
                        {startPass}
                        {startLoco}
                    </>
                )

            case 'Принят':
                return (
                    <>
                        {endLoco}
                        {train}
                    </>
                )

            case 'Пассажиром':
                return (
                    <>
                        {startPass}
                        {end}
                        {startLoco}
                    </>
                )

            case 'Поезд':
                return (
                    <>
                        {endLoco}
                        {train}
                    </>
                )

            case 'Сдан':
                return (
                    <>
                        {startLoco}
                        {end}
                        {startPass}
                    </>
                )

            case 'Конец смены':
                break;
        }
    }

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
                    {props.cards.map((card: { title: string | undefined; info: string | undefined; }, i: any) => {
                        return (
                            <Grid item xs={12} key={i}>
                                <SimpleCard
                                    title={card.title}
                                    info={card.info}
                                    to={'/start'}
                                    state={''}
                                />
                            </Grid>
                        )
                    })}
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
                    {showButtonHelper(props.lastAction)}
                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}
