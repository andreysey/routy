import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarMain from "../AppBarMain";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import TextButton from "../TextButton";
import SaveAltRoundedIcon from "@material-ui/icons/SaveAltRounded";
import TextButtonBack from "../TextButtonBack";
import TextFieldInput from "../TextFieldInput";

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

export default function EndLocoPage(props: any) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMain title={'Сдача локомотива'}/>
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container>
                    <TextButtonBack/>
                </Grid>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item xs={6}>
                        <Grid>
                            {props.endEnergyA}
                        </Grid>
                        <Grid>
                            {props.endRecupA}
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid>
                            {props.endEnergyB}
                        </Grid>
                        <Grid>
                            {props.endRecupB}
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
