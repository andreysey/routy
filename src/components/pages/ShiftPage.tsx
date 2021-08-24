import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMainPage from "../appBar/AppBarMainPage";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ButtonEndShift from "../buttons/ButtonEndShift";
import ButtonPassenger from "../buttons/ButtonPassenger";
import ButtonStartLoco from "../buttons/ButtonStartLoco";
import CardStartShift from "../cards/CardStartShift";
import ButtonBack from '../buttons/ButtonBack';
import CardStartLoco from '../cards/CardStartLoco';
import CardStartPass from "../cards/CardStartPass";
import ButtonTrain from '../buttons/ButtonTrain';
import ButtonEndLoco from "../buttons/ButtonEndLoco";
import CardStartTrain from "../cards/CardStartTrain";
import CardEndLoco from "../cards/CardEndLoco";
import CardEndShift from "../cards/CardEndShift";

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

export default function ShiftPage() {
    const classes = useStyles();

    const propsAppBar = {title: 'Смена'}

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
                    // spacing={4}
                    // direction="column"
                    // justifyContent="center"
                    // alignItems="center"
                >
                    <Grid item xs={12}>
                        <CardStartShift/>
                    </Grid>
                    <Grid item xs={12}>
                        <CardStartPass/>
                    </Grid>
                    <Grid item xs={12}>
                        <CardStartLoco/>
                    </Grid>
                    <Grid item xs={12}>
                        <CardStartTrain/>
                    </Grid>
                    <Grid item xs={12}>
                        <CardEndLoco/>
                    </Grid>
                    <Grid item xs={12}>
                        <CardEndShift/>
                    </Grid>

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
                        <ButtonEndShift/>
                    </Grid>
                    <Grid item>
                        <ButtonPassenger/>
                    </Grid>
                    <Grid item>
                        <ButtonStartLoco/>
                    </Grid>
                    <Grid item>
                        <ButtonTrain/>
                    </Grid>
                    <Grid item>
                        <ButtonEndLoco/>
                    </Grid>
                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}
