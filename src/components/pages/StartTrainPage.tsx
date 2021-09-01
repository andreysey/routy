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
            // padding: theme.spacing(4),
            // backgroundColor: 'grey',
        },
        footer: {
            padding: theme.spacing(4),
        },
    }),
);

export default function StartTrainPage() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <CssBaseline/>
            <div className={classes.header}>
                <AppBarMain title={'Поезд'}/>
            </div>
            {/* Main */}
            <Container className={classes.main} maxWidth="sm">
                <Grid container>
                    <TextButtonBack/>
                </Grid>
                <Grid container
                      spacing={2}
                >
                    <Grid item xs={12}>
                        <TextFieldInput
                            label={'Поезд'}
                            placeholder={'Номер'}
                            type={'number'}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <TextFieldInput
                            label={'Станция оправления'}
                        />
                    </Grid>

                    <Grid item xs={7}>
                        <PickDates/>
                    </Grid>
                    <Grid item xs={5}>
                        <PickTimes/>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <TextFieldInput
                            label={'Станция прибытия'}
                        />
                    </Grid>

                    <Grid item xs={7}>
                        <PickDates/>
                    </Grid>
                    <Grid item xs={5}>
                        <PickTimes/>
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
