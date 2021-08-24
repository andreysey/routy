import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMainPage from "../appBar/AppBarMainPage";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ButtonSave from "../buttons/ButtonSave";
import ButtonBack from "../buttons/ButtonBack";
import TextLocoEnergyA from "../textFields/TextLocoEnergyA";
import TextLocoEnergyB from "../textFields/TextLocoEnergyB";
import TextLocoRecupA from "../textFields/TextLocoRecupA";
import TextLocoRecupB from "../textFields/TextLocoRecupB";

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
            // backgroundColor: 'grey',
        },
        footer: {
            padding: theme.spacing(4),
        },
    }),
);

export default function EndLocoPage() {
    const classes = useStyles();

    const propsAppBar = {title: 'Сдача локомотива'}

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
                    spacing={3}
                >
                    <Grid item xs={6}
                    >
                        <Grid >
                            <TextLocoEnergyA/>
                        </Grid>
                        <Grid >
                            <TextLocoRecupA/>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}
                    >
                        <Grid >
                            <TextLocoEnergyB/>
                        </Grid>
                        <Grid >
                            <TextLocoRecupB/>
                        </Grid>
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
                        <ButtonSave/>
                    </Grid>

                </Grid>
            </Container>
            {/* End footer */}
        </div>
    );
}
