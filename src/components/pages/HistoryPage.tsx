import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMainPage from "../appBar/AppBarMainPage";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ButtonBack from '../buttons/ButtonBack';
import CardRout from "../cards/CardRout";
import PickDatesYM from '../pickers/PickDatesYM';

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

export default function HistoryPage() {
    const classes = useStyles();

    const propsAppBar = {title: 'Маршруты'}

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMainPage {...propsAppBar} />
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container>
                    <Grid item xs={12}>
                        <ButtonBack/>
                    </Grid>
                    <Grid item xs={12}>
                        <PickDatesYM/>
                    </Grid>
                </Grid>
                <Grid
                    container
                    // spacing={4}
                    // direction="column"
                    // justifyContent="center"
                    // alignItems="center"
                >
                    <Grid item xs={12}>
                        <CardRout/>
                    </Grid>
                    <Grid item xs={12}>
                        <CardRout/>
                    </Grid>
                    <Grid item xs={12}>
                        <CardRout/>
                    </Grid>
                </Grid>
            </Container>
            {/* End main */}

            {/* Footer */}
            {/*<Container className={classes.footer} maxWidth="sm">*/}
            {/*    <Grid*/}
            {/*        container*/}
            {/*        direction="column"*/}
            {/*        justifyContent="center"*/}
            {/*        alignItems="center"*/}
            {/*    >*/}
            {/*        <Grid item>*/}
            {/*            <ButtonEndShift/>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Container>*/}
            {/* End footer */}
        </div>
    );
}
