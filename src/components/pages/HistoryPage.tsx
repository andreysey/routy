import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMain from "../AppBarMain";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import PickDatesYM from '../pickers/PickDatesYM';
import TextButtonBack from "../TextButtonBack";
import SimpleCard from "../SimpleCard";

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

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMain title={'Маршруты'}/>
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container>
                    <Grid item xs={12}>
                        <TextButtonBack/>
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
                        <SimpleCard
                            name={'24.08.21  2002/4004'}
                            info={'15:30 - 17:29 - 11:45'}
                            to={'/shift'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SimpleCard
                            name={'24.08.21  2002/4004'}
                            info={'15:30 - 17:29 - 11:45'}
                            to={'/shift'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SimpleCard
                            name={'24.08.21  2002/4004'}
                            info={'15:30 - 17:29 - 11:45'}
                            to={'/shift'}
                        />
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
